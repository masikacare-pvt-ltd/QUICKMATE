import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "QUICKMATE | AIoT-Powered Intelligent Fleet Management",
  description:
    "QUICKMATE is an AIoT-powered fleet management platform for heavy vehicles, providing real-time visibility, intelligent insights and smarter fleet operations.",
  keywords: [
    "fleet management",
    "telematics",
    "AIoT",
    "heavy vehicles",
    "commercial fleet",
    "IoT device",
    "real-time tracking",
    "Odisha",
    "India",
  ],
  authors: [{ name: "QUICKMATE" }],
  creator: "QUICKMATE",
  metadataBase: new URL("https://quickmate.in"),
  openGraph: {
    title: "QUICKMATE | AIoT-Powered Intelligent Fleet Management",
    description:
      "Don’t just track your fleet. Understand it. Smarter fleets. Quicker decisions.",
    url: "https://quickmate.in",
    siteName: "QUICKMATE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/assets/quickmate-highway.jpg",
        width: 1600,
        height: 900,
        alt: "QUICKMATE Heavy Fleet on Highway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QUICKMATE | AIoT-Powered Intelligent Fleet Management",
    description:
      "Don’t just track your fleet. Understand it. Smarter fleets. Quicker decisions.",
    images: ["/assets/quickmate-highway.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/quickmate-logo.jpeg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/assets/quickmate-logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} dark`}
    >
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
