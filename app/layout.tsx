import type { Metadata } from "next";
import {
  Konkhmer_Sleokchher,
  Montserrat,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import RevealClient from "@/components/Reveal";

/**
 * Four-role typographic system.
 *
 *   Role   | Font                  | Treatment
 *   -------|-----------------------|-------------------------------------
 *   Display| Konkhmer Sleokchher   | Huge, uppercase, tight tracking
 *   UI     | Montserrat            | Small, uppercase, wide tracking, 600
 *   Body   | Inter                 | 17–22px, weight 300, generous leading
 *   Meta   | JetBrains Mono        | 10–12px, uppercase, very wide tracking
 *
 * Each font is exposed as a CSS variable so globals.css can reference
 * roles (var(--font-display)) rather than family names.
 */
const fontDisplay = Konkhmer_Sleokchher({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontSans = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontBody = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bear Consulting @ UCLA",
  description:
    "Bear Consulting @ UCLA — a student-run consulting group pairing undergraduate strategists, marketers and designers with ambitious partners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = [
    fontDisplay.variable,
    fontSans.variable,
    fontBody.variable,
    fontMono.variable,
  ].join(" ");

  return (
    <html lang="en" className={fontVars}>
      <body>
        {children}
        <RevealClient />
      </body>
    </html>
  );
}
