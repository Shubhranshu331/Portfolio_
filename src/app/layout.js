// ─────────────────────────────────────────────────────────────
// layout.js  —  Root layout for the entire app
//
// Font setup:
//  • GeistVF    → registered as 'geist' via next/font/local
//                 Used for ALL headings and display text
//  • GeistMono  → registered as 'geist-mono' via next/font/local
//                 Used for skill tags, code labels, tech snippets
//  • Lato       → loaded via Google Fonts in _document.js
//                 Used for body text, paragraphs, buttons
//
// BackgroundCanvas sits here so the constellation animation
// persists across ALL sections without remounting on scroll.
// It is fixed to the viewport at z-0, pointer-events-none.
// ─────────────────────────────────────────────────────────────

import localFont from 'next/font/local';
import BackgroundCanvas from './components/BackgroundCanvas';
import './globals.css';

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  display: 'swap',
  weight: '100 900',
});

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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="relative">
        {/* Constellation background — fixed, behind everything, never blocks clicks */}
        <BackgroundCanvas />
        {/* Page content sits above the canvas via relative + z-10 on sections */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}