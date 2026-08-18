# Personal Portfolio — Practice Project

A responsive personal portfolio site built with **HTML, CSS, and vanilla JavaScript** as a learning exercise. It covers layout, responsive design, scroll-based animation, and interactive UI patterns without any frameworks or build tools.

> ⚠️ **Note:** This is **not a real portfolio**. It's a practice build made to work through the fundamentals of frontend development — see the disclaimer in the site footer too.

---

## 🔗 Live Preview

Open `index.html` directly in a browser, or deploy it (see [Deployment](#-deployment) below).

## ✨ Features

- **Two distinct backgrounds**
  - Home/Hero — animated dark gradient-mesh with drifting color blobs and a subtle grid overlay
  - Rest of the page — a canvas-based twinkling starfield backdrop
- **Sections:** Home, About, Skills, Projects, Resume, Contact
- **Smooth scrolling** navigation with active-link highlighting on scroll
- **Scroll-reveal animations** using `IntersectionObserver`
- **Typing effect** in the hero headline
- **Animated counters** in the About section
- **Hover effects & micro-interactions** on cards, buttons, and links
- **Responsive layout** — mobile hamburger nav, fluid grids, breakpoints at 860px and 520px
- **Accessible motion** — respects `prefers-reduced-motion`
- **Front-end-only contact form** (no backend — shows a confirmation message on submit)

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, grid, flexbox, keyframe animations)
- Vanilla JavaScript (Canvas API, IntersectionObserver API)
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), [Inter](https://fonts.google.com/specimen/Inter), and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts

No frameworks, no build step, no dependencies to install.

## 📁 Project Structure

```
portfolio/
├── index.html      # Page structure & content
├── style.css        # All styling, tokens, animations, responsive rules
├── script.js         # Starfield canvas, nav behavior, reveal/typing/counter logic, form handling
└── README.md
```

## 🚀 Getting Started

1. Clone or download this folder.
2. Open `index.html` in any modern browser — that's it, no build step required.

To edit content, update the text directly inside `index.html`. Colors, fonts, and spacing are controlled by CSS custom properties at the top of `style.css` under `:root`.

## 🌐 Deployment

**GitHub Pages**
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to your main branch and `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

**Netlify**
1. Drag and drop this folder into [app.netlify.com/drop](https://app.netlify.com/drop), or connect the GitHub repo.
2. Netlify auto-detects it as a static site — no build command needed.
3. Deploy — you'll get a live URL instantly.

## Live Preview Link
[Preview](https://codealpha-portfolio-task.vercel.app/)

## 📄 License

Free to use as a learning reference or starting template.



---

**Disclaimer:** This project was built solely for practicing HTML, CSS, and JavaScript — responsive layout, scroll animation, and hover interactions. It is not an actual professional portfolio.
