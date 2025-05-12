// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLanguageFromGeo } from './utils/getLanguageFromGeo';

// Define supported locales
const locales = ['en', 'da', 'sv', 'no', 'fi'];
const defaultLocale = 'en';

// Create the middleware
const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // This is the same as the `localePrefix` option
  localePrefix: 'as-needed',
});

export async function middleware(request: NextRequest) {
  // Check if the request is for a static file or API route
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Get the pathname of the request
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If the pathname already has a locale, use the next-intl middleware
    return intlMiddleware(request);
  }

  // Get the preferred locale from the request
  let locale = request.cookies.get('NEXT_LOCALE')?.value;

  // If no locale is set in cookies, try to detect from geolocation
  if (!locale) {
    try {
      locale = await getLanguageFromGeo();
    } catch (error) {
      console.error('Error detecting language from geolocation:', error);
      locale = defaultLocale;
    }
  }

  // If we have a locale (either from cookie or geo), redirect to the localized path
  if (locale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // If no locale is found, use the next-intl middleware with default locale
  return intlMiddleware(request);
}

// Configure which paths the middleware should run on
export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (/_next, /images, etc.)
  // - Public files (favicon.ico, robots.txt, etc.)
  matcher: [
    // Match all pathnames except for
    // - API routes
    // - Static files (/_next, /images, etc.)
    // - Public files (favicon.ico, robots.txt, etc.)
    '/((?!api|_next|.*\\..*).*)',
    // However, match all pathnames within /users, including API routes
    // '/users/:path*'
  ],
};
