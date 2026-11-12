# 🚀 ApexDigital — Modern Responsive Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Design-100%25_Responsive-brightgreen.svg)](#features)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yashchaudhari372-lab/responsive-landing-page/pulls)

A modern, high-converting, and production-ready **Responsive Landing Page** tailored for digital studios, SaaS products, creative tech agencies, and freelance portfolios. Built using vanilla **HTML5**, modern **CSS3** (with custom properties and fluid layouts), and **JavaScript** (ES6+), with **zero external framework bloat**.

---

## ✨ Live Preview & Key Highlights

- **🌓 Dark & Light Mode Support:** Automatic OS preference detection with a persistent toggle button saved to `localStorage`.
- **📱 100% Fluid & Mobile-First:** Flawlessly adapts across all screen dimensions — smartphones (320px+), tablets, laptops, and ultra-wide 4K monitors.
- **⚡ Blazing Fast Performance:** Zero heavy bundle dependencies; lightweight vanilla code achieving 99+ Google PageSpeed & Core Web Vitals scores.
- **🎯 Dynamic Scroll Spy Navigation:** Sticky glassmorphic navbar with active link indicator and an animated mobile navigation drawer.
- **📊 Interactive Metrics & Counter Animations:** Smooth number counter animations triggered dynamically as the user scrolls into view.
- **💳 Interactive Pricing Switcher:** Instant monthly vs. annual pricing calculator with a "Save 20%" discount badge.
- **❓ FAQ Accordion:** Clean, accessible accordion interface with animated collapse and expand transitions.
- **✉️ Interactive Contact Form & Toast System:** Client-side field validation, interactive loading state, and custom non-blocking toast notifications.
- **♿ Accessibility (a11y) & SEO Ready:** Semantic HTML5 elements, ARIA labels, focus states, and complete Open Graph meta tags.

---

## 📸 Section Overview

| Section | Description |
| :--- | :--- |
| **Navbar** | Sticky glassmorphic header, logo, nav links, theme toggle, mobile drawer toggle, and CTA button. |
| **Hero** | Value badge, punchy headline with gradient typography, dual CTAs, client rating proof, and an interactive 3D dashboard mockup card. |
| **Trust Badges** | Monochrome partner brand logos strip for instant social proof. |
| **Features** | 6 grid cards highlighting performance, responsive design, UX/UI, accessibility, SEO, and 24/7 support. |
| **Services** | 4 detailed service cards with tags, deliverables checklists, and visual iconography. |
| **About Us** | Two-column storytelling layout, core company values, and 4 animated stats counters. |
| **Pricing** | 3-tier pricing tables with a monthly/yearly switcher and "Most Popular" highlighted card. |
| **Testimonials** | Social proof with client avatars, 5-star ratings, quotes, names, and titles. |
| **FAQ** | Expandable/collapsible accordion addressing common client questions. |
| **CTA Banner** | High-conversion gradient call-to-action banner for lead capture. |
| **Contact Form** | Two-column contact section with direct email/phone/address info and a validated message form. |
| **Footer** | Brand narrative, categorized navigation links, newsletter signup, and copyright notice. |
| **Back-to-Top** | Smooth floating scroll-to-top button appearing after 450px scroll. |

---

## 📁 Repository Structure

```text
responsive-landing-page/
├── index.html       # Semantic HTML5 markup, SEO meta tags, and structured layout
├── style.css        # CSS3 design system, custom properties, glassmorphism, responsive queries
├── script.js        # Vanilla JS for theme toggle, animations, form validation, and scroll spy
└── README.md        # Detailed project documentation and deployment guide
```

---

## 🚀 Getting Started

No build tools, bundlers, or `npm install` required! You can run this project locally in seconds.

### Method 1: Direct File Opening
1. Clone the repository:
   ```bash
   git clone https://github.com/yashchaudhari372-lab/responsive-landing-page.git
   cd responsive-landing-page
   ```
2. Double-click `index.html` to open it directly in any modern web browser (Chrome, Edge, Firefox, Safari).

### Method 2: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (`ritwickdey.liveserver`).
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Method 3: Python Built-in HTTP Server
```bash
# Python 3
python -m http.server 3000

# Open in browser: http://localhost:3000
```

### Method 4: Node.js `serve` / `npx`
```bash
npx serve .
```

---

## 🎨 Customization Guide

### 1. Changing Brand Colors & Design Tokens
All core design tokens are defined at the top of `style.css` within `:root` and `[data-theme="dark"]`:

```css
:root {
  --color-primary: #4f46e5;         /* Main brand purple/indigo */
  --color-secondary: #06b6d4;       /* Teal accent */
  --color-accent: #f59e0b;          /* Star rating yellow/amber */
  --bg-body: #f8fafc;               /* Light page background */
  --max-width: 1240px;              /* Container width */
}
```
Simply edit these variables to instantly re-theme the entire website!

### 2. Updating Contact Information
Open `index.html` and locate the `#contact` section:
- Change the email address in `mailto:yashchaudhari372@gmail.com`.
- Update phone numbers, office locations, and social links.

### 3. Adding or Modifying Navigation Items
In `index.html`, add items to `<ul class="nav-menu">` and make sure the `href="#section-id"` matches your target `<section id="section-id">`. The JavaScript scroll-spy will automatically handle active highlighting!

---

## 🌐 One-Click Free Deployment

### Deploy to GitHub Pages
1. Go to your repository settings on GitHub: `https://github.com/yashchaudhari372-lab/responsive-landing-page/settings/pages`.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)`.
4. Click **Save**. Within 1–2 minutes, your website will be live at:
   `https://yashchaudhari372-lab.github.io/responsive-landing-page/`

### Deploy to Netlify
1. Drag and drop the `responsive-landing-page` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Your site is deployed with an instant SSL link!

### Deploy to Vercel
```bash
npx vercel
```
Follow the interactive prompts and your site will be live instantly.

---

## 🛠️ Built With

- **HTML5:** Semantic architecture, accessible forms, Open Graph & meta tags.
- **CSS3:** Modern Grid, Flexbox, Custom Properties, Glassmorphism backdrop-filters, Fluid `clamp()` typography.
- **Vanilla JavaScript (ES6+):** `IntersectionObserver` API, smooth scrolling, event delegation, and asynchronous UX states.
- **Google Fonts:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [Inter](https://fonts.google.com/specimen/Inter).
- **Font Awesome 6:** Vector iconography for crisp rendering on high-DPI retina screens.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, customize, and build upon it for personal or commercial projects.

---

## 👨‍💻 Author

**Yash Chaudhari**
- GitHub: [@yashchaudhari372-lab](https://github.com/yashchaudhari372-lab)
- Email: [yashchaudhari372@gmail.com](mailto:yashchaudhari372@gmail.com)

⭐ **If you find this project helpful, don't forget to give it a star on GitHub!**
