import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramélie & Rémy Wedding Program",
  description: "Welcome to our wedding catalogue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-background text-foreground"
      >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" />

        {children}
      </body>
    </html>
  );
}
