import { createFragment } from '../../core/utils';

export function createHeader(){
  return createFragment(`
  <header>
    <div class="inner">
      <div class="logo"><img src="/logo/Asset%202.svg" alt="جروث روتس" loading="lazy"></div>
      <nav class="desktop-nav" aria-label="التنقل الرئيسي">
        <a class="active" href="#solutions">حلولنا</a>
        <a href="#about">من نحن</a>
        <a href="#partners">شركاؤنا</a>
        <a href="#contact">تواصل معنا</a>
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
  const closeMenu = () => { burger && burger.classList.remove('active'); mobileNav && mobileNav.classList.remove('open'); dim && dim.classList.remove('active'); (document.body as any).style.overflow=''; };
  burger && burger.addEventListener('click',()=>{ burger.classList.toggle('active'); mobileNav && mobileNav.classList.toggle('open'); dim && dim.classList.toggle('active'); const open = burger.classList.contains('active'); (document.body as any).style.overflow = open ? 'hidden' : ''; });
  dim && dim.addEventListener('click', closeMenu);
  mobileNav && mobileNav.querySelectorAll('a').forEach(a=> a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', e=>{ if(e.key==='Escape') closeMenu(); });
  window.addEventListener('scroll',()=>{ const y = window.scrollY || document.documentElement.scrollTop; if(!header) return; if(y>40 && y>lastScroll){ header.classList.add('scrolled'); } else if(y<10){ header.classList.remove('scrolled'); } lastScroll = y; });
}
