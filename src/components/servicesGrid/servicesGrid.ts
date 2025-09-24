export function createServicesGrid(): string {
  return `
    <section class="services-grid-section">
      <div class="services-container">
        <h2>الخدمات الرائدة<br />التي نقدمها</h2>
        <div class="grid">
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التطوير والبرمجة">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التطوير والبرمجة</h3>
            <p>نقدم حلول تطوير متكاملة باستخدام أحدث التقنيات لضمان أفضل النتائج</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="development">تطوير</li>
              <li style="--clr-tag:#70b3b1;" class="programming">برمجة</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التصميم الجرافيكي">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التصميم الجرافيكي</h3>
            <p>تصاميم إبداعية ومبتكرة تعكس هوية علامتك التجارية بأفضل شكل ممكن</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="design">تصميم</li>
              <li style="--clr-tag:#d05fa2;" class="branding">هوية بصرية</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التسويق الرقمي">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التسويق الرقمي</h3>
            <p>استراتيجيات تسويقية متطورة لزيادة انتشار علامتك التجارية ووصولها</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">تسويق</li>
              <li style="--clr-tag:#70b3b1;" class="social">وسائل التواصل</li>
              <li style="--clr-tag:#d05fa2;" class="advertising">إعلانات</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initServicesGrid(): void {
  // Add any interactive functionality here if needed
}

// mountServicesGrid function removed as it's not needed
// The component is mounted through services.ts