// ─────────────────────────────────────────────────────────────
// layout.js  —  Root layout for the entire app
//
// Font setup:
//  • GeistVF    → registered as 'geist' via next/font/local
//                 Used for ALL headings (h1–h6) and display text
//  • GeistMono  → registered as 'geist-mono' via next/font/local
//                 Used for skill tags, code labels, tech snippets
//  • Lato       → loaded via Google Fonts in _document.js
//                 Used for body text, paragraphs, buttons
//
// Both Geist fonts are self-hosted from /src/app/fonts/
// so they work offline and don't need an external request.
//
// CSS variables --font-geist and --font-geist-mono are injected
// into <html> so globals.css and any component can reference them.
// ─────────────────────────────────────────────────────────────

import localFont from 'next/font/local';
import './globals.css';

// Register GeistVF — variable font, supports all weights 100–900
const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',       // CSS variable name
  display: 'swap',                // show fallback font while loading
  weight: '100 900',              // full weight range available
});

// Register GeistMono — for technical/code-style text
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  display: 'swap',
  weight: '100 900',
});

export const metadata = {
  title: "Shubhranshu's Portfolio",
  description:
    "Welcome to my professional portfolio! This project is built using Next.js, featuring a robust backend developed on Node.js. I have integrated Resend for seamless email communication, and utilized Namecheap for domain registration and private email services. Emails are sent using the POST method to ensure security and efficiency. This portfolio is proudly hosted on Vercel, offering top-notch performance and reliability. Explore my work, and feel free to reach out with any questions or collaboration opportunities!",
  icons: {
    icon: '/images/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    // Attach both font CSS variables to <html> so the entire
    // document tree can access var(--font-geist) and var(--font-geist-mono)
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}