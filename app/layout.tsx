import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "DIGITAL STUDIO LF | Secure Access",
  description: "Next-generation infrastructure for scaling your vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
      </head>
      <body>
        {children}
        {/* Load Phosphor Icons */}
        <Script src="https://unpkg.com/@phosphor-icons/web" strategy="beforeInteractive" />
      </body>
    </html>
  );
}