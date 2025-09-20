export function createVerticalNavigation() {
  const navContainer = document.createElement('div');
  navContainer.className = 'vertical-nav';
  
  // زر الانتقال للأعلى
  const upButton = document.createElement('button');
  upButton.className = 'nav-btn nav-up';
  upButton.setAttribute('aria-label', 'الانتقال إلى القسم السابق');
  upButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  // زر الانتقال للأسفل
  const downButton = document.createElement('button');
  downButton.className = 'nav-btn nav-down';
  downButton.setAttribute('aria-label', 'الانتقال إلى القسم التالي');
  downButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  // إضافة الأزرار للحاوي
  navContainer.appendChild(upButton);
  navContainer.appendChild(downButton);
  
  // إضافة وظائف التنقل
  upButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  downButton.addEventListener('click', () => {
    const nextSection = document.querySelector('#stacked-cards, .stacked-section, .about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
  
  return navContainer;
}