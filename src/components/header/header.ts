import './header.css';
import { createFragment } from '../../core/utils';

export function createHeader(){
  return createFragment(`
  <header class="liquidGlass-wrapper">
    <div class="liquidGlass-effect"></div>
    <div class="liquidGlass-tint"></div>
    <div class="liquidGlass-shine"></div>
    <div class="liquidGlass-text inner">
      <div class="logo"><img src="/logo/Asset%202.svg" alt="جروث روتس" loading="lazy"></div>
      <nav class="desktop-nav" aria-label="التنقل الرئيسي">
        <a class="active" href="#solutions">حلولنا</a>
        <a href="#about">من نحن</a>
        <a href="#partners">شركاؤنا</a>
        <a href="#contact">تواصل معنا</a>
        <a href="#" data-page="new-home">الصفحة الجديدة</a>
        <a href="/test-outsource-standalone/" data-external-page>الصفحة المستقلة</a>
      </nav>
      <a href="#consult" class="cta-link">اطلب استشارة</a>
      <button class="burger" aria-label="القائمة"><span></span></button>
    </div>
  </header>
  <div class="mobile-nav" role="dialog" aria-modal="true" aria-label="القائمة الرئيسية">
  <a class="active" href="#solutions">حلولنا</a>
  <a href="#about">من نحن</a>
  <a href="#partners">شركاؤنا</a>
  <a href="#contact">تواصل معنا</a>
  <a href="#" data-page="new-home">الصفحة الجديدة</a>
  <a href="/test-outsource-standalone/" data-external-page>الصفحة المستقلة</a>
    <a href="#consult" class="cta-link" style="font-size:20px;">اطلب استشارة</a>
  </div>
  <div class="dim-overlay"></div>
  `);
}

export function initHeader(){
  const header = document.querySelector('header');
  const burger = document.querySelector('.burger');
  const mobileNav = document.querySelector('.mobile-nav');
  const dim = document.querySelector('.dim-overlay');
  let lastScroll = 0;
  
  function updateActive(){
    const path = window.location.pathname;
    const hash = window.location.hash.replace('#', '');
    
    // تحديث الروابط الخارجية
    const externalLinks = document.querySelectorAll('nav.desktop-nav a[data-external-page], .mobile-nav a[data-external-page]');
    externalLinks.forEach(l=>{
      if((l as HTMLAnchorElement).getAttribute('href') === '/test-outsource-standalone/'){
        if(path.includes('test-outsource-standalone')) l.classList.add('active'); 
        else l.classList.remove('active');
      }
    });
    
    // تحديث الروابط الداخلية
    const pageLinks = document.querySelectorAll('nav.desktop-nav a[data-page], .mobile-nav a[data-page]');
    pageLinks.forEach(l => {
      const pageName = (l as HTMLAnchorElement).dataset.page;
      if (pageName === hash || (hash === '' && pageName === 'home')) {
        l.classList.add('active');
      } else {
        l.classList.remove('active');
      }
    });
  }
  
  const closeMenu = () => { 
    burger && burger.classList.remove('active'); 
    mobileNav && mobileNav.classList.remove('open'); 
    dim && dim.classList.remove('active'); 
    (document.body as any).style.overflow=''; 
  };
  
  burger && burger.addEventListener('click',()=>{ 
    burger.classList.toggle('active'); 
    mobileNav && mobileNav.classList.toggle('open'); 
    dim && dim.classList.toggle('active'); 
    const open = burger.classList.contains('active'); 
    (document.body as any).style.overflow = open ? 'hidden' : ''; 
  });
  
  dim && dim.addEventListener('click', closeMenu);
  mobileNav && mobileNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMenu));
  
  window.addEventListener('popstate', updateActive);
  window.addEventListener('hashchange', updateActive);
  updateActive();
  
  window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMenu(); });
  
  window.addEventListener('scroll',()=>{ 
    const y = window.scrollY || document.documentElement.scrollTop; 
    if(!header) return; 
    if(y>40 && y>lastScroll){ 
      header.classList.add('scrolled'); 
    } else if(y<10){ 
      header.classList.remove('scrolled'); 
    } 
    lastScroll = y; 
  });
}
