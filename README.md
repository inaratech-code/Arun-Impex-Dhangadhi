# Arun Impex - Industrial Fuel & Bitumen Supplier Website

A modern, professional, and fully responsive website for Arun Impex, a leading supplier of industrial fuels and bitumen products.

## Features

- **Modern Design**: Professional industrial theme with clean typography and smooth animations
- **Fully Responsive**: Optimized for Desktop (≥1024px), Tablet (768px-1023px), and Mobile (≤767px)
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessible**: WCAG compliant with proper contrast ratios and keyboard navigation
- **Fast Performance**: Optimized images, lazy loading, and efficient code splitting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Pages

1. **Home**: Hero section, product summary, why choose us, and industries served
2. **About Us**: Company background, mission & vision, quality assurance, and industry experience
3. **Products**: Detailed information about Bitumen, Bitumen Emulsion, and Furnace Oil
4. **Industries**: Services for Road Construction, Infrastructure, Manufacturing, and Government projects
5. **Contact**: Contact form, company information, and Google Maps integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
arunimpex/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── products/          # Products page
│   ├── industries/        # Industries page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── pages/            # Page-specific components
│   ├── sections/         # Home page sections
│   ├── Footer.tsx        # Footer component
│   ├── Header.tsx        # Header/Navigation
│   └── WhatsAppButton.tsx # WhatsApp floating button
├── public/               # Static assets
└── ...config files
```

## Customization

### Colors

Update the color scheme in `tailwind.config.ts`:
- `asphalt-black`: #20201F
- `industrial-grey`: #20201F
- `deep-blue`: #20201F
- `safety-orange`: #EE6E4D

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `components/pages/contact/ContactInfo.tsx`
- `components/WhatsAppButton.tsx` (WhatsApp number)

### Google Maps

Replace the map embed URL in `components/pages/contact/MapSection.tsx` with your actual Google Maps embed code.

### Content

All content can be easily updated by editing the respective component files in the `components/` directory.

## Build for Production

```bash
npm run build
npm start
```

## Responsive Breakpoints

- **Mobile**: ≤767px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Arun Impex & Inara Tech. All rights reserved.

