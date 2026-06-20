# 🧠 Shubhranshu's Portfolio

<div align="center">

**A personal portfolio built to actually represent the work — not just list it.**

[![Live Site](https://img.shields.io/badge/Live-shubhranshu.xyz-5e2a3a?style=for-the-badge&logo=vercel)](https://shubhranshu.xyz)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer-Motion-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion)

</div>

---

## 🌐 Live

**[shubhranshu.xyz](https://shubhranshu.xyz)**

---

## ✨ What's in it

### Hero
- TypeAnimation cycling through actual roles (ML Engineer, Web Developer, Computer Vision Eng, Full Stack Dev)
- Dual pulsing glow rings around the profile photo
- Dot grid background with radial vignette
- Staggered entrance animations — each element slides in from a different direction
- Two CTAs: scroll to About + download CV

### About
- Personal bio written to feel human, not corporate
- Animated stat counters that count up on scroll (requestAnimationFrame ease-out)
- Vertical internship timeline with a line that draws itself downward on scroll
- Expandable internship cards — hover to peek, click to read the full story
- Certificate PDF links for each internship

### Skills
- Four category tabs: Languages / ML-DL / Web & Backend / Data & Tools
- Skill pills with animated confidence bars
- Pure SVG radar chart — no chart library, built from scratch
- Hovering a pill highlights its axis on the radar chart in real time

### Certifications
- Draggable carousel — drag, swipe, or use arrow buttons
- Auto-scrolls every 3.5s, pauses on hover or drag interaction
- Click the eye icon on any card to open the certificate PDF in a modal

### Projects
- 16 projects across 5 filter tabs: All / Web Dev / Machine Learning / Data Analytics / Others
- Each tab animates cards out and new ones stagger in
- Click "More" on any card to expand a drawer with a full description + links
- Only one card open at a time
- Gradient placeholders that auto-replace when screenshot images are added

### Background
- Canvas-based constellation animation running behind all sections
- 70 dots (35 on mobile) drifting slowly, connecting with lines when within 130px
- Line opacity scales with proximity — pure `requestAnimationFrame`, zero DOM overhead

### Navbar
- Top bar with glassmorphism blur, hides on scroll-down, reappears on scroll-up
- Vertical icon rail on the right — active section tracked via IntersectionObserver
- Scroll progress bar on the far right edge (Framer Motion `useScroll` + `useSpring`)
- Staggered icon entrance on first load

---

## 🛠️ Tech Stack

| Category | Tools |
|----------|-------|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS, SCSS |
| Animations | Framer Motion, Canvas API |
| Fonts | Geist VF (local), Geist Mono VF (local), Lato (Google Fonts) |
| Icons | Heroicons |
| Deployment | Vercel |
| Domain | GoDaddy → Vercel DNS |

---

## 🚀 Running locally

```bash
git clone https://github.com/Shubhranshu331/Portfolio_
cd Portfolio_
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project structure

```
src/
  app/
    components/
      BackgroundCanvas.jsx   ← constellation animation
      Navbar.jsx             ← top bar + icon rail + scroll progress
      First.jsx              ← hero section
      AboutSection.jsx       ← bio + stats + internship timeline
      SkillsetSection.jsx    ← tabbed skills + radar chart
      CertificationsSection.jsx ← draggable cert carousel
      ProjectsSection.jsx    ← filterable project grid
      EmailSection.jsx       ← contact form
    fonts/
      GeistVF.woff
      GeistMonoVF.woff
    globals.css
    layout.js
    page.js
public/
  images/
    projects/               ← project screenshots
    certifications/         ← cert preview images
  certifications/           ← cert PDFs
  internships/              ← internship cert PDFs
```

---

## 📬 Contact

- **Portfolio:** [shubhranshu.xyz](https://shubhranshu.xyz)
- **LinkedIn:** [linkedin.com/in/shubhranshu489](https://www.linkedin.com/in/shubhranshu489/)
- **GitHub:** [github.com/Shubhranshu331](https://github.com/Shubhranshu331)
- **Email:** shubhranshu331@gmail.com
