export function createServicesGrid(): string {
  return `
    <section class="services-grid-section">
      <div class="services-container">
        <h2>خدماتنا المتخصصة<br />في الصناعات الغذائية</h2>
        <div class="grid">
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="تأسيس المصانع">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">factory</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>تأسيس المصانع</h3>
            <p>دعم شامل من التخطيط والتصميم حتى التشغيل الكامل للمصنع</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="development">تخطيط</li>
              <li style="--clr-tag:#70b3b1;" class="programming">تنفيذ</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التوريد والمعدات">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">precision_manufacturing</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التوريد والمعدات</h3>
            <p>توريد أحدث المعدات وخطوط الإنتاج للصناعات الغذائية</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="design">معدات</li>
              <li style="--clr-tag:#d05fa2;" class="branding">خطوط إنتاج</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التشغيل والإدارة">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">settings</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التشغيل والإدارة</h3>
            <p>إدارة شاملة لعمليات التشغيل وضمان الكفاءة والجودة</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">تشغيل</li>
              <li style="--clr-tag:#70b3b1;" class="social">إدارة</li>
              <li style="--clr-tag:#d05fa2;" class="advertising">مراقبة</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="الاستشارات الفنية">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">engineering</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>الاستشارات الفنية</h3>
            <p>استشارات متخصصة من خبراء في الصناعات الغذائية</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">استشارة</li>
              <li style="--clr-tag:#70b3b1;" class="social">خبرة</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="التدريب والتطوير">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">school</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>التدريب والتطوير</h3>
            <p>برامج تدريبية متقدمة لتطوير مهارات فريق العمل</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">تدريب</li>
              <li style="--clr-tag:#70b3b1;" class="social">تطوير</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ضمان الجودة">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">verified</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>ضمان الجودة</h3>
            <p>أنظمة متقدمة لضمان أعلى معايير الجودة والسلامة</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">جودة</li>
              <li style="--clr-tag:#d05fa2;" class="advertising">سلامة</li>
            </ul>
          </div>
        </div>
        <div class="service-card">
          <div class="card-inner" style="--clr:#fff;">
            <div class="box">
              <div class="imgBox">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="الدعم الفني المستمر">
              </div>
              <div class="icon">
                <a href="#" class="iconBox">
                  <span class="material-symbols-outlined">support_agent</span>
                </a>
              </div>
            </div>
          </div>
          <div class="content">
            <h3>الدعم الفني المستمر</h3>
            <p>دعم فني متواصل لضمان استمرارية العمليات وحل المشاكل</p>
            <ul>
              <li style="--clr-tag:#d3b19a;" class="marketing">دعم</li>
              <li style="--clr-tag:#70b3b1;" class="social">صيانة</li>
              <li style="--clr-tag:#d05fa2;" class="advertising">متابعة</li>
            </ul>
          </div>
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