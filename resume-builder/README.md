# 📄 Resume Builder

A modern, dynamic, and fully responsive Resume Builder web application built with React.js, JavaScript, HTML5, and CSS3. Create professional resumes with customizable templates, real-time preview, and one-click PDF download.

## ✨ Features

- 🎨 **5 Professional Templates** — Modern, Classic, Creative, Minimal, Professional
- ⚡ **Real-Time Preview** — Split-screen layout with instant updates
- 📥 **PDF Download** — Export resume as PDF with one click
- 🖨️ **Print Support** — Optimized print CSS for direct printing
- 🌓 **Dark/Light Mode** — Persisted theme preference
- 🎨 **Color Customization** — 8 accent colors to choose from
- 🔤 **Font Selection** — Inter, Roboto, Poppins, Playfair Display, Georgia
- 💾 **Auto-Save** — All data saved to localStorage automatically
- 📱 **Fully Responsive** — Works on mobile, tablet, and desktop
- 🔄 **Multi-Entry Sections** — Add unlimited experience, education, projects, and certifications
- 📊 **Completion Tracker** — Visual progress indicator

## 📋 Resume Sections

- Personal Information (name, email, phone, location, LinkedIn, GitHub, website)
- Professional Summary
- Work Experience (with multiple entries)
- Education (with multiple entries)
- Skills (Technical, Soft Skills, Tools, Languages)
- Projects (with tech stack and links)
- Certifications & Awards
- Hobbies & Interests

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool and dev server
- **lucide-react** — Icons
- **html2pdf.js** — PDF generation
- **react-hot-toast** — Toast notifications
- **Context API + useReducer** — State management

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone or extract the project
cd resume-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
resume-builder/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Templates/
│   │   │   ├── ModernTemplate.jsx
│   │   │   ├── ClassicTemplate.jsx
│   │   │   ├── CreativeTemplate.jsx
│   │   │   ├── MinimalTemplate.jsx
│   │   │   └── ProfessionalTemplate.jsx
│   │   ├── FormSections/
│   │   │   ├── PersonalInfo.jsx
│   │   │   ├── Summary.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Certifications.jsx
│   │   │   └── Hobbies.jsx
│   │   ├── UI/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   ├── Input.jsx
│   │   │   └── Card.jsx
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── PreviewPane.jsx
│   │   │   └── CustomizationBar.jsx
│   │   └── FormRouter.jsx
│   ├── context/
│   │   ├── ResumeContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   └── useDebounce.js
│   ├── utils/
│   │   ├── pdfGenerator.js
│   │   ├── validators.js
│   │   └── constants.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── templates.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Add a New Template

1. Create a new component in `src/components/Templates/YourTemplate.jsx`
2. Wrap it with `React.memo` for performance
3. Register it in `src/components/Layout/PreviewPane.jsx`
4. Add it to the templates list in `src/utils/constants.js`

### Change Default Colors

Edit `COLORS` array in `src/utils/constants.js`.

### Modify CSS Variables

Edit `src/styles/variables.css` to change the design tokens (spacing, radius, colors).

## 🚢 Deployment

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to Netlify
```

## 📝 License

MIT

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

**Built with ❤️ using React.js**
