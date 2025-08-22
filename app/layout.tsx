import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const GeneratedBackground = dynamic(
  () => import("@/components/generated-background").then((m) => m.GeneratedBackground),
  { ssr: false, loading: () => null }
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AB Digital",
  description: "Stratégie & Création digitale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased with-text-outline`}>
        <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <GeneratedBackground />
        </div>
        <div id="app-root" className="relative z-10 min-h-screen">
          <HeroHeader />
          {children}
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
