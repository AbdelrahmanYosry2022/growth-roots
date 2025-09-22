import './core/base.css';
import './core/utilities.css';
import './components/visualShowcase/visualShowcase.css';

import { mountHome } from './pages/home/home';
import { mountNewHome } from './pages/new-home/newHome';

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
    loadPage(pageName);
    // تحديث URL بدون إعادة تحميل الصفحة
    history.pushState({ page: pageName }, '', `#${pageName}`);
  }
});

// استماع لأحداث الـ back/forward في المتصفح
window.addEventListener('popstate', (e) => {
  const pageName = e.state?.page || 'home';
  loadPage(pageName);
});

// تحميل الصفحة الأولى
const initialPage = window.location.hash.replace('#', '') || 'home';
loadPage(initialPage);
