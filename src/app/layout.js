// import localFont from "next/font/local";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Shubhranshu's Portfolio",
  description: "Welcome to my professional portfolio! This project is built using Next.js, featuring a robust backend developed on Node.js. I have integrated Resend for seamless email communication, and utilized Namecheap for domain registration and private email services. Emails are sent using the POST method to ensure security and efficiency. This portfolio is proudly hosted on Vercel, offering top-notch performance and reliability. Explore my work, and feel free to reach out with any questions or collaboration opportunities! Feel free to customize this description further to suit your unique style! Let me know if there's anything else you need help with.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
