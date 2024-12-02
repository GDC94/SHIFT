import type { Metadata } from "next";
import { MuseoModerno } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shift",
  description: "Design Studio",
};

const museoModerno = MuseoModerno({
  weight: ["400", "700"], // Escoge los pesos que necesitas
  subsets: ["latin"], // Escoge el conjunto de caracteres
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={museoModerno.className} lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className="h-screen w-screen">{children}</body>
    </html>
  );
}
