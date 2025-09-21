import './core/base.css';
import './core/utilities.css';



import { mountHome } from './pages/home/home';

const root = document.getElementById('app') || (() => { const d=document.createElement('div'); d.id='app'; document.body.appendChild(d); return d; })();

// تحميل الصفحة الرئيسية مع السكاشن الديناميكية
mountHome(root as HTMLElement).catch(error => {
  console.error('Error mounting home page:', error);
});
