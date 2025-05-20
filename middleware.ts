// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLanguageFromGeo } from './utils/getLanguageFromGeo';
import { redirectToHTTPS } from './middleware/config';

// Define supported locales
const locales = ['en', 'da', 'sv', 'no', 'fi'];
const defaultLocale = 'en';

// Create the next-intl middleware
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: 'as-needed',
});

export async function middleware(request: NextRequest) {
  // First, handle HTTPS redirection
  const httpsResponse = redirectToHTTPS(request);
  if (httpsResponse) return httpsResponse;

  // Then handle static files and API routes
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Rest of your internationalization logic
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return intlMiddleware(request);
  }

  let locale = request.cookies.get('NEXT_LOCALE')?.value;

  if (!locale) {
    try {
      locale = await getLanguageFromGeo();
    } catch (error) {
      console.error('Error detecting language from geolocation:', error);
      locale = defaultLocale;
    }
  }

  if (locale) {
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
