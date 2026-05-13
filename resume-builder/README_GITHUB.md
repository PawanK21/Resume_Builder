# Workflow Status Badge
[![Build and Deploy](https://github.com/[YOUR_USERNAME]/resume-builder/actions/workflows/deploy.yml/badge.svg)](https://github.com/[YOUR_USERNAME]/resume-builder/actions/workflows/deploy.yml)
[![Security Checks](https://github.com/[YOUR_USERNAME]/resume-builder/actions/workflows/security.yml/badge.svg)](https://github.com/[YOUR_USERNAME]/resume-builder/actions/workflows/security.yml)

# Resume Builder

A modern, responsive resume builder application built with React and Vite.

## Features
- 📝 Multiple resume templates
- 🎨 Customizable themes and layouts
- 💾 Local storage persistence
- 📄 PDF export functionality
- ⚡ Fast development with Vite
- 🎯 Real-time preview
- 📱 Mobile responsive design

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Runs on `http://localhost:3000`

### Production Build
```bash
npm run build
npm run preview
```

## Project Structure
```
src/
├── components/        # Reusable React components
│   ├── FormRouter.jsx
│   ├── FormSections/ # Resume form sections
│   ├── Layout/       # Main layout components
│   ├── Templates/    # Resume templates
│   └── UI/           # UI components
├── context/          # React context for state management
├── hooks/            # Custom React hooks
├── styles/           # Global and template styles
├── utils/            # Utility functions
├── App.jsx
└── main.jsx
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **html2pdf.js** - PDF generation
- **React Hot Toast** - Notifications

## Deployment
This project is configured for automated deployment with GitHub Actions. See [DEPLOYMENT.md](./DEPLOYMENT.md) for setup instructions.

### Deploy to GitHub Pages
The project automatically deploys to GitHub Pages when you push to the `main` branch.

### Deploy to Other Platforms
- **Vercel**: Connect your GitHub repo to Vercel
- **Netlify**: Connect your GitHub repo to Netlify
- **AWS Amplify**: Follow AWS Amplify deployment guide

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Security
Security is important. Please report any vulnerabilities privately by emailing security@example.com instead of using the issue tracker.

## Troubleshooting
See [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting) for common issues and solutions.
