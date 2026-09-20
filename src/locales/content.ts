import english from './content.en.json'

export type Language = 'zh' | 'en'

// Chinese source text is the catalog key. Keep identifiers and asset paths separate.
const translations: Record<string, string> = english

export function translateContent(source: string, language: Language): string {
  return language === 'en' ? translations[source] ?? source : source
}
