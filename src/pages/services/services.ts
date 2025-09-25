// صفحة الخدمات
import { createHeader, initHeader } from '../../components/header/header';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createServicesGrid, initServicesGrid } from '../../components/servicesGrid/servicesGrid';
import { createHeroSection, initHeroSection } from '../../components/heroSection/heroSection';
import { createExtrasSections, initExtrasSections } from '../../components/servicesExtras/servicesExtras';
import '../../components/header/header.css';
import '../../components/footer/footer.css';
import '../../components/servicesGrid/servicesGrid.css';
import '../../components/heroSection/heroSection.css';
import '../../components/servicesExtras/servicesExtras.css';

export async function mountServices(root: HTMLElement) {
  // إنشاء fragment لتجميع العناصر
  const frag = document.createDocumentFragment();

  // إضافة الهيدر
  frag.appendChild(createHeader());

  // إضافة الهيرو سيكشن
  const heroDiv = document.createElement('div');
  heroDiv.innerHTML = createHeroSection();
  frag.appendChild(heroDiv.firstElementChild as HTMLElement);

  // إضافة محتوى الصفحة
   const mainContent = document.createElement('main');
   mainContent.className = 'services-main';
   
   // إضافة سيكشن الخدمات
   mainContent.insertAdjacentHTML('beforeend', createServicesGrid());
  // إضافة 3 سكاشن عصرية مع انيميشن بعد السيكشن الأخير
  mainContent.insertAdjacentHTML('beforeend', createExtrasSections());
   frag.appendChild(mainContent);

  // إضافة الفوتر
  frag.appendChild(createFooter());

  // إضافة المحتوى للصفحة
  root.appendChild(frag);

  // تهيئة المكونات
  initHeader();
  initHeroSection();
  initServicesGrid();
  initExtrasSections();
  initFooter();
}

export default { mountServices };