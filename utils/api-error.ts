export class ApiError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }

  static badRequest(message: string, code?: string) {
    return new ApiError(400, message, code);
  }

  static unauthorized(message: string = 'Unauthorized', code?: string) {
    return new ApiError(401, message, code);
  }

  static forbidden(message: string = 'Forbidden', code?: string) {
    return new ApiError(403, message, code);
  }

  static notFound(message: string = 'Not Found', code?: string) {
    return new ApiError(404, message, code);
  }

  static internal(message: string = 'Internal Server Error', code?: string) {
    return new ApiError(500, message, code);
  }
}

export function handleApiError(error: unknown) {
  if (error instanceof ApiError) {
    return {
      status: error.statusCode,
      body: {
        error: {
          message: error.message,
          code: error.code,
        },
      },
    };
  }

  console.error('Unhandled API error:', error);

  return {
    status: 500,
    body: {
      error: {
        message: 'Internal Server Error',
        code: 'INTERNAL_ERROR',
      },
    },
  };
} 