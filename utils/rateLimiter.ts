// 'use client'

import { NextRequest, NextResponse } from "next/server";

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function rateLimitMiddleware(handler: (req: NextRequest, res: NextResponse) => Promise<NextResponse>) {
  return async (req: NextRequest, res: NextResponse) => {
    const forwardedFor = req.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim()  || 'unknown-ip'; // Fallback to unknown-ip if none found
    const limit = 20; // Limit of requests per minute per IP
    const windowMs = 60 * 1000; // 1 minute

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      });
    }

    const ipData = rateLimitMap.get(ip)!;

    // Reset the count if the time window has passed
    if (Date.now() - ipData.lastReset > windowMs) {
      ipData.count = 0;
      ipData.lastReset = Date.now();
    }

    // If limit exceeded, return 429 Too Many Requests
    if (ipData.count >= limit) {
      return new NextResponse(
        JSON.stringify({ message: 'Too many requests, please try again later.' }),
        { status: 429 }
      );
    }

    ipData.count += 1;

    // Proceed to the actual handler
    return handler(req, res);
  };
}
