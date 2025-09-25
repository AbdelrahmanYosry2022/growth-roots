// 3 modern animated sections component for services page

export function createExtrasSections() {
  return `
  <section class="extras-sections">
    <div class="container">
      <section class="extras-card extras--features" aria-labelledby="extras-features">
        <div class="card-inner">
          <h2 id="extras-features">حلول مبتكرة</h2>
          <p>نص موجز يشرح حلولنا المبتكرة والتركيز على القيمة والنتائج.</p>
          <ul class="features-list">
            <li><strong>تحليل مخصص</strong> — فهم عميق لاحتياجات العميل.</li>
            <li><strong>تصميم قابل للتنفيذ</strong> — خرائط طريق واضحة للتنفيذ.</li>
            <li><strong>دعم مستمر</strong> — شراكة طويلة المدى لنجاح النشاط.</li>
          </ul>
        </div>
      </section>

      <section class="extras-card extras--stats" aria-labelledby="extras-stats">
        <div class="card-inner">
          <h2 id="extras-stats">أرقام تتحدث</h2>
          <div class="stats-grid">
            <div class="stat">
              <div class="stat-number" data-target="120">0</div>
              <div class="stat-label">مشروع ناجح</div>
            </div>
            <div class="stat">
              <div class="stat-number" data-target="15">0</div>
              <div class="stat-label">سنة خبرة</div>
            </div>
            <div class="stat">
              <div class="stat-number" data-target="98">0</div>
              <div class="stat-label">رضا العملاء %</div>
            </div>
          </div>
        </div>
      </section>

      <section class="extras-card extras--cta" aria-labelledby="extras-cta">
        <div class="card-inner">
          <h2 id="extras-cta">جاهز للانطلاق؟</h2>
          <p>دعنا نرتب جلسة استكشاف مجانية لتحديد الفرص ونبني خطة قابلة للتنفيذ.</p>
          <div class="cta-actions">
            <a class="btn btn-primary" href="/contact">احجز استشارة</a>
            <a class="btn btn-outline" href="/services">المزيد عن خدماتنا</a>
          </div>
        </div>
      </section>

    </div>
  </section>
  `;
}

// تهيئة الانيميشن: reveal عند الظهور وعداد الأرقام
export function initExtrasSections() {
  // Intersection Observer لعمل reveal للعناصر
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.extras-card').forEach(el => observer.observe(el));

  // عداد الأرقام
  function animateNumber(el: Element) {
    const target = Number((el as HTMLElement).dataset.target || 0);
    const duration = 1400;
    let start = 0;
    const startTime = performance.now();

    function step(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      (el as HTMLElement).textContent = String(value);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const statsObserved = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(animateNumber);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsEl = document.querySelector('.extras--stats');
  if (statsEl) statsObserved.observe(statsEl);
}
