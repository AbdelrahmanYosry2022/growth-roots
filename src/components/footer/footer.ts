import './footer.css';

/**
 * Footer Component - Isolated and Reusable
 * يحتوي على جميع وظائف الـ footer مع عزل كامل للأكواد
 */

/**
 * إنشاء عنصر الـ footer
 * @returns HTMLElement - عنصر الـ footer
 */
export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer-component';
  footer.setAttribute('aria-labelledby', 'footer-heading');
  
  footer.innerHTML = `
    <h2 id="footer-heading" class="sr-only">معلومات الفوتر</h2>
    <div class="footer-grid">
      <div class="footer-col">
        <h5>الشركة</h5>
        <a href="#" data-page="about">من نحن</a>
        <a href="#" data-page="services">الخدمات</a>
        <a href="#products">المنتجات</a>
        <a href="#contact">تواصل</a>
      </div>
      <div class="footer-col">
        <h5>الخدمات</h5>
        <a href="#">تأسيس المصانع</a>
        <a href="#">إدارة التشغيل</a>
        <a href="#">تطوير المنتجات</a>
        <a href="#">إعادة الهيكلة</a>
      </div>
      <div class="footer-col">
        <h5>روابط</h5>
        <a href="#">الأسئلة الشائعة</a>
        <a href="#">قصص النجاح</a>
        <a href="#">الشراكات</a>
        <a href="#">السياسة والخصوصية</a>
      </div>
      <div class="footer-col">
        <h5>تابعنا</h5>
        <div class="footer-social-row">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="YouTube">YT</a>
          <a href="#" aria-label="X">X</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-brand">
        <img src="/logo/Asset%202.svg" alt="Growth Roots">
        <span>شريك صناعي متكامل</span>
      </div>
      <div class="footer-language-switch" aria-label="تبديل اللغة">
        <button class="active" data-lang="ar">AR</button>
        <button data-lang="en">EN</button>
      </div>
      <div>© <span id="footer-year"></span> Growth Roots. جميع الحقوق محفوظة.</div>
    </div>
  `;
  
  return footer;
}

/**
 * تهيئة وظائف الـ footer
 * يجب استدعاء هذه الدالة بعد إضافة الـ footer للصفحة
 */
export function initFooter(): void {
  // تحديث السنة الحالية
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
  
  // إعداد أزرار تبديل اللغة
  const languageButtons = document.querySelectorAll('.footer-component .footer-language-switch button');
  
  languageButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const clickedButton = event.target as HTMLButtonElement;
      
      // إزالة الكلاس النشط من جميع الأزرار
      languageButtons.forEach(btn => btn.classList.remove('active'));
      
      // إضافة الكلاس النشط للزر المضغوط
      clickedButton.classList.add('active');
      
      // يمكن إضافة منطق تغيير اللغة هنا
      const selectedLang = clickedButton.getAttribute('data-lang');
      console.log(`Language switched to: ${selectedLang}`);
      
      // إرسال حدث مخصص لتغيير اللغة
      const languageChangeEvent = new CustomEvent('languageChange', {
        detail: { language: selectedLang }
      });
      document.dispatchEvent(languageChangeEvent);
    });
  });
}

/**
 * تحديث محتوى الـ footer ديناميكياً
 * @param content - المحتوى الجديد للـ footer
 */
export function updateFooterContent(content: Partial<FooterContent>): void {
  const footer = document.querySelector('.footer-component');
  if (!footer) return;
  
  if (content.companyLinks) {
    const companyCol = footer.querySelector('.footer-col:first-child');
    if (companyCol) {
      updateColumnLinks(companyCol, content.companyLinks);
    }
  }
  
  if (content.serviceLinks) {
    const serviceCol = footer.querySelector('.footer-col:nth-child(2)');
    if (serviceCol) {
      updateColumnLinks(serviceCol, content.serviceLinks);
    }
  }
  
  if (content.otherLinks) {
    const otherCol = footer.querySelector('.footer-col:nth-child(3)');
    if (otherCol) {
      updateColumnLinks(otherCol, content.otherLinks);
    }
  }
}

/**
 * تحديث روابط عمود معين
 * @param column - العمود المراد تحديثه
 * @param links - الروابط الجديدة
 */
function updateColumnLinks(column: Element, links: FooterLink[]): void {
  const existingLinks = column.querySelectorAll('a');
  existingLinks.forEach(link => link.remove());
  
  links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.textContent = link.text;
    if (link.target) anchor.target = link.target;
    column.appendChild(anchor);
  });
}

/**
 * أنواع البيانات للـ footer
 */
export interface FooterLink {
  text: string;
  url: string;
  target?: string;
}

export interface FooterContent {
  companyLinks?: FooterLink[];
  serviceLinks?: FooterLink[];
  otherLinks?: FooterLink[];
}

/**
 * إزالة الـ footer من الصفحة
 */
export function removeFooter(): void {
  const footer = document.querySelector('.footer-component');
  if (footer) {
    footer.remove();
  }
}