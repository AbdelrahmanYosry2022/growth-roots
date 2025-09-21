import './verticalNavigation.css';

export function createVerticalNavigation() {
  const navContainer = document.createElement('div');
  navContainer.className = 'vertical-nav';
  
  // متغيرات لتتبع الكارت الحالي
  let currentCardIndex = 0;
  const totalCards = 5; // عدد الكروت في السيكشن الثاني
  
  // زر الانتقال للأعلى
  const upButton = document.createElement('button');
  upButton.className = 'nav-btn nav-up';
  upButton.setAttribute('aria-label', 'الانتقال إلى الكارت السابق');
  upButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  // زر الانتقال للأسفل
  const downButton = document.createElement('button');
  downButton.className = 'nav-btn nav-down';
  downButton.setAttribute('aria-label', 'الانتقال إلى الكارت التالي');
  downButton.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  
  // إضافة الأزرار للحاوي
  navContainer.appendChild(upButton);
  navContainer.appendChild(downButton);
  
  // وظيفة للتنقل إلى كارت معين
  function navigateToCard(cardIndex: number) {
    const stackedSection = document.querySelector('.stacked-cards-container');
    if (!stackedSection) return;
    
    // التحقق من وجود الكروت
    const cards = document.querySelectorAll('.stack-card');
    if (cards.length === 0) return;
    
    // حساب المسافة للتنقل (كل كارت يحتاج حوالي 520px)
    const cardHeight = 520;
    const scrollDistance = cardIndex * cardHeight;
    
    // التنقل إلى الموضع المحسوب
    const stackedSectionTop = stackedSection.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = stackedSectionTop + scrollDistance;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    currentCardIndex = cardIndex;
    updateButtonStates();
  }
  
  // وظيفة لتحديث حالة الأزرار
  function updateButtonStates() {
    upButton.disabled = currentCardIndex <= 0;
    downButton.disabled = currentCardIndex >= totalCards - 1;
    
    // إضافة كلاسات للتصميم
    upButton.classList.toggle('disabled', currentCardIndex <= 0);
    downButton.classList.toggle('disabled', currentCardIndex >= totalCards - 1);
  }
  
  // إضافة وظائف التنقل
  upButton.addEventListener('click', () => {
    if (currentCardIndex > 0) {
      navigateToCard(currentCardIndex - 1);
    }
  });
  
  downButton.addEventListener('click', () => {
    if (currentCardIndex < totalCards - 1) {
      navigateToCard(currentCardIndex + 1);
    }
  });
  
  // تحديث حالة الأزرار في البداية
  updateButtonStates();
  
  // مراقبة التمرير لتحديث الكارت الحالي
  let scrollTimeout: number;
  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = window.setTimeout(() => {
      const stackedSection = document.querySelector('.stacked-cards-container');
      if (!stackedSection) return;
      
      const sectionTop = stackedSection.getBoundingClientRect().top + window.pageYOffset;
      const currentScroll = window.pageYOffset;
      const relativeScroll = currentScroll - sectionTop;
      
      // حساب الكارت الحالي بناءً على موضع التمرير
      const cardHeight = 520;
      const newCardIndex = Math.max(0, Math.min(totalCards - 1, Math.round(relativeScroll / cardHeight)));
      
      if (newCardIndex !== currentCardIndex) {
        currentCardIndex = newCardIndex;
        updateButtonStates();
      }
    }, 100);
  });
  
  return navContainer;
}

// وظيفة لتهيئة التنقل العمودي
export function initVerticalNavigation() {
  const navContainer = document.querySelector('.vertical-nav');
  if (navContainer) {
    // إظهار التنقل عند التمرير إلى السيكشن الثاني
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navContainer.classList.add('visible');
        } else {
          navContainer.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const stackedSection = document.querySelector('.stacked-cards-container');
    if (stackedSection) {
      observer.observe(stackedSection);
    }
  }
}

// وظيفة لإزالة التنقل العمودي
export function removeVerticalNavigation() {
  const navContainer = document.querySelector('.vertical-nav');
  if (navContainer) {
    navContainer.remove();
  }
}