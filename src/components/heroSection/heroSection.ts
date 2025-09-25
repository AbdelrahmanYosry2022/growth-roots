// Hero Section Component - Modern and Creative Design

export function createHeroSection(): string {
  return `
    <section class="hero-section">
      <div class="hero-container">
        <!-- Background Elements -->
        <div class="hero-bg-elements">
          <div class="floating-shape shape-1"></div>
          <div class="floating-shape shape-2"></div>
          <div class="floating-shape shape-3"></div>
          <div class="gradient-overlay"></div>
        </div>
        
        <!-- Main Content -->
        <div class="hero-content">
          <div class="hero-text-section">
            <div class="hero-badge">
              <div class="badge-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <span class="badge-text">رواد في الصناعات الغذائية</span>
            </div>
            
            <h1 class="hero-title">
              <span class="title-line-1">نحن نبني <span class="title-highlight" id="heroAnimatedText">المستقبل</span></span>
              <span class="title-line-2">للصناعات الغذائية</span>
            </h1>
            
            <p class="hero-description">
              شركة جروث رووتس تقدم حلولاً متكاملة ومبتكرة في مجال الصناعات الغذائية، 
              من التأسيس والتجهيز إلى الإدارة والتطوير، لنضمن نجاح مشروعك وتميزه في السوق.
            </p>
            
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">مشروع ناجح</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-label">سنة خبرة</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">100%</div>
                <div class="stat-label">رضا العملاء</div>
              </div>
            </div>
            
            <div class="hero-actions">
              <button class="btn-primary">
                <span>استكشف خدماتنا</span>
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="btn-secondary">
                <span>تواصل معنا</span>
              </button>
            </div>
          </div>
          
          <div class="hero-visual-section">
            <div class="hero-image-container">
              <div class="image-wrapper">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="مصنع غذائي حديث" class="hero-image">
                <div class="image-overlay"></div>
              </div>
              
              <!-- Floating Cards -->
              <div class="floating-card card-1">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M3 3V21H21V3H3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="card-content">
                  <div class="card-title">إدارة متقدمة</div>
                  <div class="card-desc">أنظمة ذكية</div>
                </div>
              </div>
              
              <div class="floating-card card-2">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" fill="none"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <div class="card-content">
                  <div class="card-title">تجهيز شامل</div>
                  <div class="card-desc">معدات حديثة</div>
                </div>
              </div>
              
              <div class="floating-card card-3">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" fill="none"/>
                  </svg>
                </div>
                <div class="card-content">
                  <div class="card-title">ضمان الجودة</div>
                  <div class="card-desc">معايير عالمية</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="scroll-text">اكتشف المزيد</div>
          <div class="scroll-arrow">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroSection(): void {
  // Initialize animated text
  const animatedTextElement = document.getElementById('heroAnimatedText');
  if (animatedTextElement) {
    const words = ['المستقبل', 'التميز', 'الابتكار', 'النجاح'];
    let currentIndex = 0;
    
    function animateText() {
      animatedTextElement.style.opacity = '0';
      animatedTextElement.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        animatedTextElement.textContent = words[currentIndex];
        animatedTextElement.style.opacity = '1';
        animatedTextElement.style.transform = 'translateY(0)';
      }, 300);
    }
    
    // Start animation
    setInterval(animateText, 3000);
  }
  
  // Add scroll behavior for buttons
  const primaryBtn = document.querySelector('.btn-primary');
  if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
      const servicesSection = document.querySelector('.services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  
  // Add parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section') as HTMLElement;
    
    if (heroSection) {
      const shapes = heroSection.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const speed = 0.5 + (index * 0.2);
        (shape as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    }
  });
}

export default { createHeroSection, initHeroSection };