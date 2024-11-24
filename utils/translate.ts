import * as text from '@/lib/language/en-gb.json';

type TranslateKey = Record<string, string>;

export const translate = (key: string) => {
  const translations = text as TranslateKey;

  return translations[key] ?? key;
};
