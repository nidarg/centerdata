// // middleware.ts
// import createMiddleware from 'next-intl/middleware';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { getLanguageFromGeo } from './utils/getLanguageFromGeo';

// // Define supported locales
// const locales = ['en', 'da', 'sv', 'no', 'fi'];
// const defaultLocale = 'en';

// // Create the next-intl middleware with strict locale handling
// const intlMiddleware = createMiddleware({
//   locales,
//   defaultLocale,
//   localePrefix: 'always', // Always show locale in URL
//   localeDetection: false, // Disable automatic locale detection
// });

// export async function middleware(request: NextRequest) {
//   // Skip middleware for static files and API routes
//   if (
//     request.nextUrl.pathname.startsWith('/_next') ||
//     request.nextUrl.pathname.startsWith('/api') ||
//     request.nextUrl.pathname.includes('.')
//   ) {
//     return NextResponse.next();
//   }

//   // Get the host and protocol
//   const host = request.headers.get('host') || '';
//   const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  
//   // Handle development environment
//   const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');
  
//   // For production, ensure we're using the correct domain
//   if (!isLocalhost && !host.includes('www.datacompliancecentre.com')) {
//     return NextResponse.next();
//   }

//   // Get the pathname without any locale prefix
//   const pathname = request.nextUrl.pathname;
//   const pathnameWithoutLocale = pathname.replace(/^\/(en|da|sv|no|fi)(\/|$)/, '/');

//   // If the pathname already has a locale, let next-intl handle it
//   if (pathname.match(/^\/(en|da|sv|no|fi)(\/|$)/)) {
//     return intlMiddleware(request);
//   }

//   // Get the preferred locale
//   let locale = request.cookies.get('NEXT_LOCALE')?.value;
//   if (!locale) {
//     try {
//       locale = await getLanguageFromGeo();
//     } catch (error) {
//       console.error('Error detecting language from geolocation:', error);
//       locale = defaultLocale;
//     }
//   }

//   // Ensure locale is valid
//   if (!locales.includes(locale)) {
//     locale = defaultLocale;
//   }

//   // Construct the new URL with the locale
//   const newUrl = new URL(`/${locale}${pathnameWithoutLocale}`, `${protocol}://${host}`);
  
//   // Set the locale cookie
//   const response = NextResponse.redirect(newUrl);
//   response.cookies.set('NEXT_LOCALE', locale, {
//     path: '/',
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'lax',
//   });

//   return response;
// }

// export const config = {
//   matcher: ['/((?!api|_next|.*\\..*).*)'],
// };

// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { getLanguageFromGeo } from './utils/getLanguageFromGeo'; // Disabled geo-detection

// Supported locales - for now only English
const locales = ['en'];
const defaultLocale = 'en';

// next-intl middleware setup
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false,
});

export async function middleware(request: NextRequest) {
  // Skip for static and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const host = request.headers.get('host') || '';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const isLocalhost = host.includes('localhost') || host.includes('127.0.0.1');

  // Only apply domain-specific check in production
  if (!isLocalhost && !host.includes('www.datacompliancecentre.com')) {
    return NextResponse.next();
  }

  const pathname = request.nextUrl.pathname;
  const pathnameWithoutLocale = pathname.replace(/^\/(en)(\/|$)/, '/');

  // Let next-intl handle if path has locale
  if (pathname.match(/^\/(en)(\/|$)/)) {
    return intlMiddleware(request);
  }

  // Force locale to English (disable cookie + geo logic)
  const locale = 'en';

  // Redirect to English-prefixed path
  const newUrl = new URL(`/${locale}${pathnameWithoutLocale}`, `${protocol}://${host}`);

  // Set English locale cookie
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
