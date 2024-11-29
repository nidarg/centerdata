import { NextRequest } from 'next/server';
import { redirectToHTTPS } from './middleware/config';

export function middleware(req: NextRequest) {
  redirectToHTTPS(req);
}
