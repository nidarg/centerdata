import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getLanguageFromGeo } from './utils/getLanguageFromGeo';

const locales = ['en', 'da', 'sv', 'no', 'fi'];
const defaultLocale = 'en';

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

  if (pathnameHasLocale) return NextResponse.next();

  // Get the preferred locale from the request
  let locale = request.cookies.get('NEXT_LOCALE')?.value;

  // If no locale is set in cookies, try to detect from geolocation
  if (!locale) {
    try {
      locale = await getLanguageFromGeo();
    } catch (error) {
      locale = defaultLocale;
    }
  }

  // Redirect to the locale path
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
