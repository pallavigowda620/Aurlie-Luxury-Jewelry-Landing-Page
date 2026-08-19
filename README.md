# Aurélie — Luxury Jewelry Landing Page

A fully responsive landing page for an online jewelry brand, built as part of my internship task to design and develop a premium e-commerce landing page using HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

**[Live Demo]( https://pallavigowda620.github.io/Aurlie-Luxury-Jewelry-Landing-Page/)** · **[Screenshots](Screenshots)**

---

## 📋 Task Brief

Design and build a modern, elegant landing page for a fictional online jewelry store, covering:
- Sticky responsive navigation with search and cart
- Full-screen hero section
- Featured product collections
- Trust/feature highlights
- Customer testimonials
- Call-to-action banner
- Footer with contact and social links

## ✨ Features

- **Fully responsive** — desktop, tablet, and mobile layouts using Bootstrap 5 grid
- **Custom design system** — ivory/cream/gold luxury palette with Playfair Display + Poppins typography
- **Scroll-progress "chain" indicator** — a custom SVG element that visually fills as the user scrolls, echoing a necklace chain
- **Scroll-reveal animations** using the Intersection Observer API
- **Hover micro-interactions** on product cards, buttons, and icons
- **Accessible** — visible keyboard focus states, semantic HTML, `prefers-reduced-motion` support
- **Bootstrap Icons** for UI icons (search, cart, socials, feature icons)
- **No image dependencies** — hero and product visuals are hand-built inline SVG line art, so the page loads reliably with no broken image links

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|---------------------------------|
| Markup     | HTML5 (semantic)                |
| Styling    | CSS3, Bootstrap 5 (CDN)         |
| Icons      | Bootstrap Icons                 |
| Fonts      | Google Fonts (Playfair Display, Poppins) |
| Behavior   | Vanilla JavaScript (ES6)        |

## 📁 Project Structure

```
├── index.html      # Page markup and content
├──css
    ├──style.css       # Custom styling, design tokens, animations
├── js
    ├──script.js       # Nav scroll state, scroll-reveal, chain progress
└── README.md
```

## 🚀 Running Locally

No build step required — it's a static site.

```bash
git clone <repo-url>
cd <repo-folder>
# then just open index.html in a browser, or serve it locally:
python3 -m http.server 8000
```

Visit `http://localhost:5500` in your browser.

## 📸 Screenshots

<img width="1366" height="728" alt="Screenshot1" src="https://github.com/user-attachments/assets/a66e2eb5-3cd0-476f-a6b8-4f0c6ff6a732" />
<img width="1366" height="728" alt="Screenshot2" src="https://github.com/user-attachments/assets/062a7b48-e21a-46d9-be92-63453867b5bf" />
<img width="1366" height="728" alt="Screenshot3" src="https://github.com/user-attachments/assets/d0014211-0e68-44c1-84e9-b7017679ba6a" />
<img width="1366" height="728" alt="Screenshot4" src="https://github.com/user-attachments/assets/22b63631-1957-44ba-bb2b-df24dfdbb88f" />
<img width="1366" height="728" alt="Screenshot5" src="https://github.com/user-attachments/assets/d12a52aa-ba36-46dd-a092-fcffd53ce11b" />
<img width="1366" height="728" alt="Screenshot6" src="https://github.com/user-attachments/assets/8af129e5-6737-4472-9e99-12473fa6c603" />





## 📚 What I Learned

- Structuring a multi-section landing page with Bootstrap's grid system
- Writing custom CSS on top of Bootstrap without specificity conflicts
- Implementing scroll-based interactions (Intersection Observer, scroll listeners) in vanilla JS
- Designing a cohesive visual identity (color tokens, type scale, spacing) rather than using default styling

## 👤 Author

Built by Pallavi Jattu Gowda as part of an internship frontend development task.
