# ◈ Interactive 3D Portfolio

> A premium, interactive portfolio website featuring liquid crystal glass UI, 3D particle effects, smooth GSAP animations, and a stunning mountain-valley-inspired color palette.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=flat-square&logo=github)

---

## ✨ Features

- 🏔️ **Cinematic Hero** — Full-viewport landing with parallax background & 3D floating glass orbs
- 💎 **Liquid Crystal Buttons** — SVG turbulence filter buttons with refractive ripple hover effects
- 🎮 **3D Interactive Elements** — React Three Fiber scenes with wireframe skill orbs & particles
- ✨ **Smooth Animations** — GSAP ScrollTrigger-powered entrance animations & parallax
- 🖱️ **Custom Cursor** — Smooth-follow dot + ring cursor with hover morphing
- 🪟 **Glass Morphism** — `backdrop-filter` glass cards with 3D tilt on hover
- 📱 **Fully Responsive** — Mobile-first design with adaptive layouts
- 🚀 **Auto Deploy** — GitHub Actions CI/CD to GitHub Pages
- ⚡ **Lightning Fast** — Vite 6 build with optimized chunking

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph Entry["🚀 Entry Point"]
        HTML[index.html<br/>SEO + SVG Filters]
        MAIN[main.jsx]
        APP[App.jsx<br/>Lenis + GSAP Setup]
    end

    subgraph Design["🎨 Design System"]
        CSS[index.css<br/>CSS Variables]
        ANIM[animations.css<br/>Keyframes]
    end

    subgraph Sections["📄 Page Sections"]
        NAV[Navbar]
        HERO[Hero + HeroScene]
        ABOUT[About]
        SKILLS[Skills + SkillOrbs]
        PROJ[Projects]
        EXP[Experience Timeline]
        CONTACT[Contact Form]
        FOOTER[Footer]
    end

    subgraph Shared["🔧 Shared UI"]
        BTN[LiquidButton]
        CARD[GlassCard]
        CURSOR[CustomCursor]
        SCROLL[ScrollIndicator]
    end

    subgraph Tech["⚙️ Core Libraries"]
        R3F[React Three Fiber]
        DREI[Drei]
        GSAP[GSAP ScrollTrigger]
        LENIS[Lenis Smooth Scroll]
    end

    HTML --> MAIN --> APP
    APP --> NAV & HERO & ABOUT & SKILLS & PROJ & EXP & CONTACT & FOOTER
    CSS & ANIM --> APP
    BTN & CARD & CURSOR & SCROLL --> Sections
    R3F & DREI --> HERO & SKILLS
    GSAP --> Sections
    LENIS --> APP

    style Entry fill:#1a2f0a,stroke:#6B8F3C,color:#fff
    style Design fill:#2a1f0a,stroke:#E8A838,color:#fff
    style Sections fill:#1a1030,stroke:#7B5EA7,color:#fff
    style Shared fill:#2a0f0a,stroke:#E05A33,color:#fff
    style Tech fill:#1A1410,stroke:#B8A89A,color:#fff
```

---

## 🎨 Color Palette

```mermaid
pie title Color Distribution in Design System
    "Sunset Gold #E8A838" : 30
    "Warm Amber #D4853A" : 15
    "Wildflower Purple #7B5EA7" : 15
    "Wildflower Orange #E05A33" : 10
    "Meadow Green #6B8F3C" : 10
    "Deep Earth #1A1410" : 20
```

---

## 🚀 Deployment Pipeline

```mermaid
flowchart LR
    A[Push to main] --> B[GitHub Actions]
    B --> C[Checkout Code]
    C --> D[Setup Node 20]
    D --> E[npm ci]
    E --> F[npm run build]
    F --> G[Upload Artifact]
    G --> H[Deploy to<br/>GitHub Pages]
    H --> I[🌐 Live Site]

    style A fill:#6B8F3C,stroke:#3A5F28,color:#fff
    style B fill:#1A1410,stroke:#E8A838,color:#fff
    style H fill:#7B5EA7,stroke:#9B8EC4,color:#fff
    style I fill:#E8A838,stroke:#D4853A,color:#1A1410
```

---

## 📂 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml    # CI/CD pipeline
├── public/
│   ├── images/hero-bg.png          # Hero background
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/                 # Floating glass navbar
│   │   ├── Hero/                   # Landing + 3D scene
│   │   ├── About/                  # Bio + stats
│   │   ├── Skills/                 # 3D skill orbs
│   │   ├── Projects/               # Project showcase
│   │   ├── Experience/             # Timeline
│   │   ├── Contact/                # Form + socials
│   │   ├── Footer/                 # Footer
│   │   └── UI/                     # Shared components
│   ├── styles/                     # Design system
│   ├── App.jsx                     # Root component
│   └── main.jsx                    # Entry point
├── .env.example                    # Env template
├── .gitignore
├── vite.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | 19.x |
| **Vite** | Build Tool | 6.x |
| **Three.js** | 3D Graphics | Latest |
| **React Three Fiber** | React ↔ Three.js | 9.x |
| **Drei** | R3F Helpers | 10.x |
| **GSAP** | Animation Engine | 3.12 |
| **Lenis** | Smooth Scrolling | 1.x |
| **GitHub Actions** | CI/CD | v4 |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📊 Component Dependency Graph

```mermaid
graph LR
    App --> Navbar
    App --> Hero
    App --> About
    App --> Skills
    App --> Projects
    App --> Experience
    App --> Contact
    App --> Footer
    App --> CustomCursor

    Hero --> LiquidButton
    Hero --> ScrollIndicator
    Hero --> HeroScene
    About --> GlassCard
    Skills --> GlassCard
    Skills --> SkillsScene
    Projects --> GlassCard
    Projects --> LiquidButton
    Contact --> LiquidButton
    Footer --> LiquidButton

    HeroScene --> R3F["React Three Fiber"]
    SkillsScene --> R3F

    style App fill:#E8A838,stroke:#D4853A,color:#1A1410
    style R3F fill:#7B5EA7,stroke:#9B8EC4,color:#fff
```

---

## 📄 License

MIT License — feel free to use this as a template for your own portfolio!

---

<p align="center">
  Built with ♡ using React, Three.js, GSAP & Vite<br/>
  <strong>◈ Portfolio</strong>
</p>
