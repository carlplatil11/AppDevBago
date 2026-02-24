# Portfolio Website

A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design with dark theme
- ⚡ Built with Next.js 14 App Router
- 💼 Featured work showcase
- 📚 Currently learning section with progress tracking
- 📧 Contact form with Formspree integration
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

## Configuration

### Formspree Integration

The contact form is already configured with Formspree. The form endpoint is set to:
```
https://formspree.io/f/xykdlzer
```

To use your own Formspree endpoint, update the URL in [src/components/Contact.tsx](src/components/Contact.tsx).

## Customization

### Update Personal Information

Edit the following files to personalize the portfolio:

- [src/components/Hero.tsx](src/components/Hero.tsx) - Hero section with name and bio
- [src/components/FeaturedWork.tsx](src/components/FeaturedWork.tsx) - Project showcase
- [src/components/CurrentlyLearning.tsx](src/components/CurrentlyLearning.tsx) - Skills and learning progress
- [src/components/Contact.tsx](src/components/Contact.tsx) - Contact information

### Add Your Photo

Replace the placeholder in the Hero component with your actual photo or ID card image.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Form Handling:** Formspree
- **Deployment:** Vercel

## License

© 2026 Carl Vincent G. Platil. All rights reserved.
