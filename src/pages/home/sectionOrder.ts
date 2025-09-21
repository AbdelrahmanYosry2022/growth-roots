/**
 * ترتيب السكاشن في الصفحة الرئيسية
 * يمكن تعديل هذا الترتيب لتغيير ظهور السكاشن
 */
export const SECTION_ORDER = [
  'testimonials',
  'contact'
] as const;

/**
 * معلومات إضافية عن كل سكشن
 */
export interface SectionMetadata {
  name: string;
  enabled: boolean;
  hasInit?: boolean;
}

/**
 * إعدادات السكاشن
 */
export const SECTION_CONFIG: Record<string, SectionMetadata> = {
  testimonials: {
    name: 'testimonials',
    enabled: true,
    hasInit: true
  },
  contact: {
    name: 'contact',
    enabled: true,
    hasInit: true
  }
};