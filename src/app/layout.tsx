import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rafayel.dev"),
  title: {
    default: "Rafayel — Full Stack & React Native Developer",
    template: "%s | Rafayel",
  },
  description:
    "Full-stack web applications, mobile experiences, backend systems and automation built around real business needs. Digital Workshop & Product Lab based in Bangladesh, working worldwide.",
  keywords: [
    "Full Stack Developer",
    "React Native Developer",
    "Mobile Applications",
    "Next.js",
    "TypeScript",
    "Node.js",
    "REST APIs",
    "Automation",
    "Digital Products",
    "Software Engineer Bangladesh",
  ],
  authors: [{ name: "Rafayel", url: "https://rafayel.dev" }],
  creator: "Rafayel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafayel.dev",
    siteName: "Rafayel — Digital Workshop",
    title: "Rafayel — Full Stack & React Native Developer",
    description:
      "I build digital products, not just websites. Full-stack web applications, mobile experiences, backend systems and automation.",
    images: [
      {
        url: "/images/rafayel.jpg",
        width: 1200,
        height: 1200,
        alt: "Rafayel — Full Stack & React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafayel — Full Stack & React Native Developer",
    description:
      "I build digital products, not just websites. Full-stack web, mobile, backend & automation.",
    images: ["/images/rafayel.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-[#0B0B0C] text-[#F5F5F3] font-sans min-h-screen selection:bg-[#E5A84B] selection:text-[#0B0B0C]">
        {children}
      </body>
    </html>
  );
}
