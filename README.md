<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/19W5jdIiXfb5wFFY1U4wPROEVkRP3m8Sf

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

```
growth-roots
├─ README.md
├─ docs
│  ├─ content
│  │  ├─ about.md
│  │  ├─ brothers-steel-products.md
│  │  ├─ clients-testimonials.md
│  │  ├─ contact.md
│  │  ├─ factory-establishment.md
│  │  ├─ faq.md
│  │  ├─ gallery.md
│  │  ├─ home.md
│  │  ├─ operation-management.md
│  │  ├─ partnership-careers.md
│  │  ├─ product-development.md
│  │  ├─ raw-materials-supply.md
│  │  ├─ restaurant-support.md
│  │  ├─ restructuring.md
│  │  ├─ ricatto-products.md
│  │  ├─ services.md
│  │  ├─ supply-equipment.md
│  │  └─ training-development.md
│  └─ prd
│     └─ project-requirements-document.md
├─ index.css
├─ index.html
├─ index.tsx
├─ metadata.json
├─ package-lock.json
├─ package.json
├─ public
│  ├─ colors
│  │  └─ palette.txt
│  ├─ licensed-image (1).jpeg
│  ├─ licensed-image (2).jpeg
│  ├─ licensed-image.jpeg
│  ├─ logo
│  │  ├─ Asset 1.svg
│  │  └─ Asset 2.svg
│  ├─ unnamed (1).png
│  └─ videos
│     └─ EMSTEEL.mp4
├─ src
│  ├─ components
│  │  ├─ about
│  │  ├─ contact
│  │  ├─ footer
│  │  ├─ header
│  │  │  ├─ header.css
│  │  │  └─ header.ts
│  │  ├─ hero
│  │  │  ├─ hero.css
│  │  │  ├─ hero.ts
│  │  │  └─ sliderInit.ts
│  │  ├─ productsSolutions
│  │  ├─ services
│  │  ├─ stacked
│  │  └─ testimonials
│  ├─ core
│  │  ├─ base.css
│  │  ├─ utilities.css
│  │  └─ utils.ts
│  ├─ main.ts
│  ├─ pages
│  │  └─ home
│  │     ├─ 1-productsSolutions
│  │     │  ├─ productsSolutions.css
│  │     │  └─ productsSolutionsSection.ts
│  │     ├─ 2-services
│  │     │  ├─ services.css
│  │     │  └─ servicesSection.ts
│  │     ├─ 3-testimonials
│  │     │  ├─ testimonials.css
│  │     │  └─ testimonialsSection.ts
│  │     ├─ 4-contact
│  │     │  ├─ contact.css
│  │     │  └─ contactSection.ts
│  │     ├─ 6-footer
│  │     │  ├─ footer.css
│  │     │  └─ footerSection.ts
│  │     ├─ 9-stacked
│  │     │  ├─ stacked.css
│  │     │  └─ stackedSection.ts
│  │     ├─ downArrow.css
│  │     ├─ home.ts
│  │     ├─ sectionOrder.ts
│  │     └─ verticalNavigation.ts
│  └─ utils
│     └─ updateMainTs.ts
├─ test-outsource-standalone
│  ├─ assets
│  │  ├─ Asset 1.svg
│  │  ├─ Asset 2.svg
│  │  ├─ EMSTEEL.mp4
│  │  ├─ licensed-image (1).jpeg
│  │  ├─ licensed-image (2).jpeg
│  │  ├─ licensed-image.jpeg
│  │  ├─ logo
│  │  │  ├─ Asset 1.svg
│  │  │  └─ Asset 2.svg
│  │  ├─ unnamed (1).png
│  │  └─ videos
│  │     └─ EMSTEEL.mp4
│  ├─ index.html
│  ├─ script.js
│  └─ style.css
├─ tsconfig.json
└─ vite.config.ts

```