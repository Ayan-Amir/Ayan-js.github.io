# Portfolio Map

## Site structure (user-facing)

```
Portfolio
│
├── Header (global)
│   ├── Brand: Ayyan Amir
│   └── Nav
│       ├── Technologies  → #technologies
│       ├── Portfolio    → #portfolio
│       └── Contacts     → #contact
│
└── Main content (single-page sections)
    │
    ├── #home — Hero / Introduction
    │   ├── Title: Software Engineer
    │   └── Intro text + CTA (optional)
    │
    ├── #technologies — Skills
    │   ├── Subtitle: Skills
    │   └── Tech stack (see PORTFOLIO_CONTENT.md)
    │
    ├── #portfolio — Portfolio (commented out)
    │   └── Project cards: Booosted, Zendash, XON, Blabble, Zain Report (see PORTFOLIO_CONTENT.md)
    │
    ├── #services — My Services (commented out)
    │   └── Custom Website Development
    │
    └── #contact — Contacts (nav link only, section not implemented)
```

---

## File structure (current)

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── pages/
│   └── home/
│       ├── Home.jsx
│       └── index.js
└── utils/
    ├── constants.jsx
    └── helperFunctions.js
```

---

## Status legend

| Section   | Status     |
| --------- | ---------- |
| Hero      | ✅ Visible |
| Skills    | ✅ Visible |
| Portfolio | ✅ Visible |
| Services  | ✅ Visible |
| Contact   | ✅ Visible |
