// صفحة الخدمات
import { createHeader, initHeader } from '../../components/header/header';
import { createFooter, initFooter } from '../../components/footer/footer';
import { createServicesGrid, initServicesGrid } from '../../components/servicesGrid/servicesGrid';
import { createHeroSection, initHeroSection } from '../../components/heroSection/heroSection';
import '../../components/header/header.css';
import '../../components/footer/footer.css';
import '../../components/servicesGrid/servicesGrid.css';
import '../../components/heroSection/heroSection.css';

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
   frag.appendChild(mainContent);

  // إضافة الفوتر
  frag.appendChild(createFooter());

  // إضافة المحتوى للصفحة
  root.appendChild(frag);

  // تهيئة المكونات
  initHeader();
  initHeroSection();
  initServicesGrid();
  initFooter();
}

export default { mountServices };