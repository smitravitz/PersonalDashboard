# 🧭 PersonalDashboard

A modular, fast, and clean dashboard built with React, Tailwind, and Vite.  
Designed for local use or deployable on platforms like Render or a Raspberry Pi.

---

## 🚀 Features

- 📆 "On This Day" historical events with summaries and images (Wikipedia)
- 🌟 Wikipedia's featured article of the day
- ⚡ Clean layout, instant load, and responsive UI

---

## 🧩 Deployment (Render Static Site)

1. Push this repo to GitHub
2. Create a Static Site on [Render](https://render.com)
3. Use the following settings:

```
Build Command:     npm run build
Publish Directory: dist
```

---

## 🧰 Local Development

```bash
npm install
npm run dev
```

Then open `http://localhost:5173`

---

## 📁 File Structure

```
PersonalDashboard/
├── index.html
├── package.json
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── OnThisDay.jsx
│       └── FeaturedArticle.jsx
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
```

---

## 📜 License

MIT — feel free to use, remix, or extend.
