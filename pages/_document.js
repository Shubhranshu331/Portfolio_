// ─────────────────────────────────────────────────────────────
// pages/_document.js
//
// Only Lato is loaded here from Google Fonts.
// Geist VF and Geist Mono are self-hosted via next/font/local
// in layout.js — so they don't need a <link> tag here.
//
// Lato weights loaded:
//  300 → light, for subtle labels
//  400 → regular body text
//  700 → bold, for buttons and emphasis
// ─────────────────────────────────────────────────────────────

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Lato — body text, paragraphs, buttons, UI labels */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/titlelogo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}