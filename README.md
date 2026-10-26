# AI Cyber Law

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://aicyber-news.vercel.app/)

> **AI Cyber Law** — A modern cybersecurity and cyber law knowledge hub for Nepal, built with React, Vite, and Tailwind CSS.

**Live Demo:** [https://aicyber-news.vercel.app/](https://aicyber-news.vercel.app/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Pages & Sections](#-pages--sections)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Content & Forms](#-content--forms)
- [Security Notes](#-security-notes)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🌐 Overview

AI Cyber Law is a responsive, single-page React application that helps individuals and organisations in Nepal understand cybercrime, digital law, and practical security. It brings legal guidance, incident reporting tools, AI security insights, expert commentary, case studies, and learning resources into one accessible interface.

The project focuses on clarity: complex legal material is presented alongside plain-language explanations, and every section gives visitors a clear next step — read a law summary, report an incident, explore a resource, or contact the team.

---

## ✨ Features

### 🛡️ Cybersecurity & Legal Guidance
- **Cyber Law Library** — Summaries of Nepal's Electronic Transactions Act, privacy and data protection, and cybercrime prevention
- **AI Security Solutions** — Threat detection, healthcare security, and education security use cases
- **Expert Insights** — Security, legal, and digital forensics perspectives with publication highlights
- **Case Studies** — Real-world breach analysis, key findings, and prevention lessons
- **FAQ Accordion** — Clear answers to common cyber law and incident questions

### 🚨 Incident Reporting
- **Incident Report Modal** — Structured form with incident type, date, impact, and affected systems
- **Anonymous Tip Guidance** — Dedicated reporting channel information
- **Evidence Collection Guidance** — Practical steps for preserving digital evidence
- **Emergency Contacts** — Cyber Bureau Nepal, National CERT Nepal, and forensics contacts
- **Direct Contact Actions** — Click-to-call and email links for urgent support

### 📚 Resources & Learning
- **Resource Library** — Guides, documentation, training videos, toolkits, and templates
- **Blog** — Featured articles with category filters and a full article reader modal
- **Newsletter Signup** — Email validation with inline success and error feedback
- **Extensible Content Model** — Structured data arrays make laws, resources, posts, and FAQs easy to update

### 🎨 User Experience
- **Responsive Layout** — Mobile, tablet, and desktop layouts throughout
- **Animated Interface** — Scroll reveals, count-up statistics, hover states, and page transitions powered by Framer Motion
- **Sticky Navigation** — Scroll progress bar, active-section highlighting, and a mobile menu
- **Smooth Anchor Navigation** — Offset scrolling that accounts for the fixed navbar
- **Accessible Interactions** — Keyboard-friendly modals, Escape-to-close, focus styles, and reduced-motion support
- **Dark Theme** — A consistent dark palette with teal, blue, and purple accents

---

## 🗺 Pages & Sections

| Route / Section | Description |
|-----------------|-------------|
| `/` | Main landing page with all public sections |
| `/about` | Mission, focus areas, values, and team overview |
| `/#top` | Hero, statistics, and latest cybersecurity updates |
| `/#cyber-laws` | Nepal cyber law summaries |
| `/#ai-solutions` | AI-powered security solutions and benefits |
| `/#resources` | Resource library and newsletter |
| `/#report-incident` | Incident reporting tools and emergency contacts |
| `/#experts` | Expert profiles and publications |
| `/#case-studies` | Cybersecurity case studies and findings |
| `/#blog` | Articles, category filters, and newsletter |
| `/#faq` | Frequently asked questions |
| `/#contact` | Contact form and office information |

Legacy paths `/home` and `/whoweare` redirect to `/` and `/about` respectively. Unknown routes redirect to the home page.

---

## 🛠 Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| **React 18** | Component-based UI |
| **Vite 5** | Development server and production build |
| **Tailwind CSS 3** | Utility-first styling and responsive design |
| **Framer Motion 11** | Page, modal, and scroll animations |
| **React Router 6** | Client-side routing (`/`, `/about`) |
| **React Intersection Observer** | Scroll-triggered animations |
| **Lucide React** | Iconography |

### Tooling

| Technology | Purpose |
|------------|---------|
| **ESLint 9** | Static analysis and code quality |
| **PostCSS / Autoprefixer** | CSS processing |
| **@tailwindcss/aspect-ratio** | Responsive media ratios |

### Deployment

| Service | Purpose |
|---------|---------|
| **Vercel** | Static hosting and global CDN |

> This project is frontend-only. There is no backend API, authentication service, or database in the current repository.

---

## 🏗 Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│                     Browser (Client)                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  React 18   │  │ React Router │  │  Component State    │  │
│  │    + Vite   │  │   (`/`,      │  │  (forms, modals,    │  │
│  │             │  │   `/about`)  │  │   filters)          │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ▼
                 ┌───────────────────────┐
                 │  Static Build (dist/) │
                 │  HTML · CSS · JS      │
                 └───────────┬───────────┘
                             │
                             ▼
                 ┌───────────────────────┐
                 │   Vercel CDN / Edge   │
                 │  https://aicyber-      │
                 │  news.vercel.app      │
                 └───────────────────────┘
```

There are no runtime API calls. Forms and newsletter signups validate input in the browser and display local confirmation messages; no data is sent to a server.

---

## 📁 Project Structure

```bash
AIcyber-News/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav, mobile menu, scroll progress
│   │   ├── Hero.jsx             # Hero, incident modal, resource modal
│   │   ├── StatsSection.jsx     # Statistics, updates, resource modal
│   │   ├── LatestUpdates.jsx    # Recent cybersecurity updates
│   │   ├── CyberLaws.jsx        # Nepal cyber law summaries
│   │   ├── AISolution.jsx       # AI security solutions
│   │   ├── ResourceLibrary.jsx  # Resources and newsletter
│   │   ├── ReportingTools.jsx   # Incident reporting and contacts
│   │   ├── ExpertsInsights.jsx  # Experts and publications
│   │   ├── CaseStudy.jsx        # Case studies and findings
│   │   ├── Blog.jsx             # Articles, filters, reader modal
│   │   ├── Faq.jsx              # Accordion FAQ
│   │   ├── ContactUs.jsx        # Contact form and office details
│   │   └── Footer.jsx           # Links, newsletter, credits
│   ├── pages/
│   │   ├── Home.jsx             # Landing page composition
│   │   └── About.jsx            # About / mission page
│   ├── App.jsx                  # Router setup
│   ├── main.jsx                 # Application entry point
│   └── index.css                # Tailwind layers, utilities, animations
├── index.html                   # Document shell and metadata
├── tailwind.config.js           # Theme, colors, fonts, plugins
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint configuration
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or newer
- npm (or yarn — the repository declares `yarn@1.22.22`)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ravipajiyar/AIcyber-News.git
   cd AIcyber-News
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**

   Vite prints the local URL (typically [http://localhost:5173](http://localhost:5173)).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

### Environment Variables

No environment variables are required for the current static build. All content is bundled with the frontend.

---

## 🌐 Deployment

The live site is deployed on Vercel:

**[https://aicyber-news.vercel.app/](https://aicyber-news.vercel.app/)**

### Deploy Your Own

1. Push the repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) → **Add New → Project**.
3. Import the repository.
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** repository root (`./`)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Deploy.

For direct visits to client-side routes such as `/about`, configure a Vercel rewrite so unknown paths serve `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Production Verification

```bash
npm run build
npm run preview
```

Confirm the home page renders, navigation and `/about` work, modals open and close, forms validate, and newsletter states appear as expected.

---

## 📝 Content & Forms

- **Content is local.** Laws, resources, experts, case studies, blog posts, and FAQs are defined in component-level data arrays. Edit the relevant component to update the site.
- **Forms are demonstrative.** The incident report, contact form, blog newsletter, footer newsletter, and resource modal validate input in the browser and show confirmation messages. They do not persist or transmit submissions.
- **No authentication.** There are no accounts, sessions, or protected routes.
- **Add a backend before collecting real incidents.** Do not ask users to submit sensitive evidence through the current demo forms.

---

## 🔒 Security Notes

- No secrets, API keys, or credentials are stored in this repository.
- No user data is transmitted or persisted by the current frontend.
- All links to external authorities open in a new tab with `rel="noopener noreferrer"`.
- Forms validate email format and required fields client-side only; this is a usability aid, not a security control.
- Before production use with real submissions, add a trusted backend with HTTPS, server-side validation, rate limiting, authentication, and secure storage.

---

## 🤝 Contributing

Contributions are welcome:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some amazing feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request.

Please run `npm run lint` and `npm run build` before opening a PR.

---

## 📄 License

No license file is currently included in this repository. Until a license is added, the source is provided for viewing and reference only. Contact the author for reuse or distribution permission.

---

## 👨‍💻 Author

**Ravi Pajiyar**

- GitHub: [@ravipajiyar](https://github.com/ravipajiyar)
- LinkedIn: [Ravi Pajiyar](https://www.linkedin.com/in/ravi-pajiyar-a4a5512ba/)
- Live Project: [aicyber-news.vercel.app](https://aicyber-news.vercel.app/)

---

Built with React, Vite, and Tailwind CSS for a safer digital Nepal.
