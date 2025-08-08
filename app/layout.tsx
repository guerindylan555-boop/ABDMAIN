import "./globals.css";
import type { ReactNode } from "react";
import SmoothScroll from "./smooth-scroll";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased bg-white text-neutral-900">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
