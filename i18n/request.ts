// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Remove the type check and use default locale
  const resolvedLocale = locale || 'en';

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}/common.json`))
      .default,
  };
});
