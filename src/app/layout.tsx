import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// display:swap lets text render immediately with fallback while font loads —
// eliminates LCP discovery delay and reduces render-blocking impact.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deanius | Legendary Surfer & Product Visionary",
  description:
    "Deanius — legendary big-wave surfer and world-class product manager. " +
    "Riding perfect reef breaks and building composable digital experiences that last.",
  keywords: [
    "Deanius",
    "surfer",
    "big wave surfing",
    "product manager",
    "product visionary",
    "Contentstack",
    "headless CMS",
    "composable architecture",
    "digital experience platform",
  ],
  openGraph: {
    title: "Deanius | Legendary Surfer & Product Visionary",
    description:
      "Riding waves and building digital experiences that stand the test of time.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning prevents React error #418 caused by client-side
    // theme class toggling (dark/light) updating the html element after hydration.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
