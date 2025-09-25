import './core/base.css';
import './core/utilities.css';
import './components/visualShowcase/visualShowcase.css';

import { mountHome } from './pages/home/home';
import { mountNewHome } from './pages/new-home/newHome';
import { mountServices } from './pages/services/services';
import { mountAbout } from './pages/about/about';

const root = document.getElementById('app') || (() => { const d=document.createElement('div'); d.id='app'; document.body.appendChild(d); return d; })();

// Router بسيط للتنقل بين الصفحات
async function loadPage(pageName: string = 'home') {
  // تنظيف المحتوى السابق
  (root as HTMLElement).innerHTML = '';
  
  try {
    switch (pageName) {
      case 'new-home':
        await mountNewHome(root as HTMLElement);
        break;
      case 'services':
        await mountServices(root as HTMLElement);
        break;
      case 'about':
        await mountAbout(root as HTMLElement);
        break;
      case 'home':
      default:
        await mountHome(root as HTMLElement);
        break;
    }
  } catch (error) {
    console.error(`Error mounting ${pageName} page:`, error);
  }
}

// استماع لأحداث التنقل من الهيدر
document.addEventListener('click', (e) => {
  const target = e.target as HTMLAnchorElement;
  if (target.dataset?.page) {
    e.preventDefault();
    const pageName = target.dataset.page;
    // تحديث URL أولاً لضمان قراءة الهيدر للقيمة الصحيحة من الهاش
    history.pushState({ page: pageName }, '', `#${pageName}`);
    // إعلام الهيدر فورًا لتحديث حالة الروابط
    window.dispatchEvent(new HashChangeEvent('hashchange'));
    // ثم تحميل الصفحة المطلوبة
    loadPage(pageName);
  }
});

// استماع لأحداث الـ back/forward في المتصفح
window.addEventListener('popstate', (e) => {
  const pageName = e.state?.page || 'home';
  loadPage(pageName);
});

// تحميل الصفحة الأولى
const initialPage = window.location.hash.replace('#', '') || 'home';
loadPage(initialPage).then(() => {
  // إزالة علامة التحميل بعد تحميل الصفحة
  document.body.classList.remove('loading');
});
