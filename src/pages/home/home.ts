// استيراد المكونات والوظائف
import { createHeader, initHeader } from '../../components/header/header';
import { createHero } from '../../components/hero/hero';
import { initHeroSlider } from '../../components/hero/sliderInit';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createStacked, initStacked } from '../../components/stacked/stacked';
import { createProductsSolutions, initProductsSolutions } from '../../components/productsSolutions/productsSolutions';
import { createServices, initServices } from '../../components/services/services';
import { createTestimonialsSection, initTestimonials } from '../../components/testimonials/testimonials';
import { createContactSection, initContact } from '../../components/contact/contact';
import { SECTION_CONFIG } from './sectionOrder';
import { updateMainTsImports } from '../../utils/updateMainTs';

// Function to get available section folders dynamically using import.meta.glob
async function getAvailableSections(): Promise<string[]> {
  // Use import.meta.glob to discover all section directories
  const sectionModules = import.meta.glob('./*/*.ts', { eager: false });
  
  // Define sections that should be excluded
  const excludedItems = ['home.ts', 'downArrow.css', 'verticalNavigation.ts', 'testOutsource', 'sectionOrder.ts'];
  
  const availableSections: string[] = [];
  
  // Extract folder names from the glob results
  for (const modulePath of Object.keys(sectionModules)) {
    // Extract folder name from path like "./1-productsSolutions/productsSolutionsSection.ts"
    const pathParts = modulePath.split('/');
    if (pathParts.length >= 3) {
      const folderName = pathParts[1]; // Get the folder name
      const fileName = pathParts[2]; // Get the file name
      
      // Skip excluded items and ensure it's a section file
      if (!excludedItems.includes(fileName) && 
          fileName.endsWith('Section.ts') && 
          !availableSections.includes(folderName)) {
        availableSections.push(folderName);
      }
    }
  }
  
  // Sort sections by number prefix, then alphabetically
  availableSections.sort((a, b) => {
    // Extract the number prefix if it exists
    const getOrderNumber = (name: string): number => {
      const match = name.match(/^(\d+)-/);
      return match ? parseInt(match[1]) : 999; // Non-numbered items go to the end
    };
    
    const orderA = getOrderNumber(a);
    const orderB = getOrderNumber(b);
    
    // If both have numbers, sort by number
    if (orderA !== 999 && orderB !== 999) {
      return orderA - orderB;
    }
    
    // If only one has a number, numbered comes first
    if (orderA !== 999) return -1;
    if (orderB !== 999) return 1;
    
    // If neither has a number, sort alphabetically
    return a.localeCompare(b);
  });
  
  console.log('Available sections discovered dynamically:', availableSections);
  return availableSections;
}

/**
 * دالة لتحميل السكاشن ديناميكياً من المجلدات
 */
async function loadSectionsDynamically() {
  const sections: (() => HTMLElement)[] = [];
  const initFunctions: (() => void)[] = [];
  const availableSections = await getAvailableSections();
  
  // Update CSS imports in main.ts based on discovered sections
  updateMainTsImports(availableSections);
  
  for (const sectionName of availableSections) {
    // Clean section name for config lookup (remove number prefix if exists)
    const cleanSectionName = sectionName.replace(/^\d+-/, '');
    const config = SECTION_CONFIG[cleanSectionName];
    
    // تخطي السكاشن المعطلة
    if (config && !config.enabled) {
      console.warn(`Section ${cleanSectionName} is disabled`);
      continue;
    }
    
    try {
      // تحميل الموديول ديناميكياً
      const module = await import(`./${sectionName}/${cleanSectionName}Section`);
      
      // البحث عن دالة الإنشاء
      const createFunctionName = `create${cleanSectionName.charAt(0).toUpperCase() + cleanSectionName.slice(1)}Section`;
      const createFunction = module[createFunctionName];
      
      if (createFunction && typeof createFunction === 'function') {
        sections.push(createFunction);
        
        // البحث عن دالة التهيئة إذا كانت موجودة
        if (config && config.hasInit) {
          const initFunctionNames = [
            `init${cleanSectionName.charAt(0).toUpperCase() + cleanSectionName.slice(1)}`,
            `init${cleanSectionName.charAt(0).toUpperCase() + cleanSectionName.slice(1)}Section`,
            `init${cleanSectionName.charAt(0).toUpperCase() + cleanSectionName.slice(1)}Rotation`,
            `init${cleanSectionName.charAt(0).toUpperCase() + cleanSectionName.slice(1)}Form`
          ];
          
          for (const initName of initFunctionNames) {
            const initFunction = module[initName];
            if (initFunction && typeof initFunction === 'function') {
              initFunctions.push(initFunction);
              break;
            }
          }
        }
      } else {
        console.warn(`Create function not found for section: ${cleanSectionName}`);
      }
    } catch (error) {
      console.warn(`Could not load section: ${sectionName}`, error);
    }
  }
  
  return { sections, initFunctions };
}

/**
 * دالة تحميل الصفحة الرئيسية مع السكاشن الديناميكية
 */
export async function mountHome(root: HTMLElement) {
  const frag = document.createDocumentFragment();
  
  // إضافة الهيدر والهيرو (ثابتين)
  frag.appendChild(createHeader());
  frag.appendChild(createHero());
  
  // إضافة مكون الـ services المعزول
  frag.appendChild(createServices());
  
  // تحميل السكاشن ديناميكياً
  const { sections, initFunctions } = await loadSectionsDynamically();
  
  // إضافة كل سكشن للصفحة
  sections.forEach(createSection => {
    try {
      const sectionElement = createSection();
      if (sectionElement) {
        frag.appendChild(sectionElement);
      }
    } catch (error) {
      console.error('Error creating section:', error);
    }
  });
  
  // إضافة مكون الـ productsSolutions المعزول
  frag.appendChild(createProductsSolutions());
  
  // إضافة مكون الـ stacked المعزول
  frag.appendChild(createStacked());
  
  // إضافة الـ footer
  frag.appendChild(createFooter());
  
  root.appendChild(frag);
  
  // تشغيل دوال التهيئة
  initHeader();
  initHeroSlider();
  initFooter();
  
  // تهيئة مكون الـ services المعزول
  initServices();
  
  // تشغيل دوال تهيئة السكاشن
  initFunctions.forEach(initFn => {
    try {
      initFn();
    } catch (error) {
      console.error('Error initializing section:', error);
    }
  });
  
  // تهيئة مكون الـ productsSolutions المعزول
  initProductsSolutions();
  
  // تهيئة مكون الـ stacked المعزول
  initStacked();
}
