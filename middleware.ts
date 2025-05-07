import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';  // Import the 'crypto' module to generate random nonces
import { redirectToHTTPS } from './middleware/config';

export function middleware(req: NextRequest) {
  // First, handle the HTTPS redirect logic
  redirectToHTTPS(req);

  // const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
//   const cspHeader = `
//     default-src 'self';
//     connect-src 'self' *.datacompliancecentre.com;
//     script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
//     style-src 'self' 'nonce-${nonce}';
//     img-src 'self' blob: data:;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     upgrade-insecure-requests;
// `
//   // Replace newline characters and spaces
//   const contentSecurityPolicyHeaderValue = cspHeader
//     .replace(/\s{2,}/g, ' ')
//     .trim()
 
//   const requestHeaders = new Headers(req.headers)
//   requestHeaders.set('x-nonce', nonce)
 
//   requestHeaders.set(
//     'Content-Security-Policy',
//     contentSecurityPolicyHeaderValue
//   )
 
//   const response = NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   })
//   response.headers.set(
//     'Content-Security-Policy',
//     contentSecurityPolicyHeaderValue
//   )
//    const response = NextResponse.next();
//   response.headers.set('x-nonce', nonce);
//   return response
// }

// // Export the config to define which paths the middleware should be applied to
// // Applying middleware to **all** paths by using the wildcard '*'
// export const config = {
//     matcher: '/', // This applies the middleware to all paths in your app
};
