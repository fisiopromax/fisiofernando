import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FS Therapy — Fernando Junior Delgado Castañeda | Fisioterapia Roma Sur CDMX",
  description:
    "Fisioterapia ortopédica, deportiva y oncológica en Roma Sur, CDMX. Atención personalizada con evaluación, plan y seguimiento.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-ink-1 antialiased">
        {children}
      </body>
    </html>
  );
}
