import type { Viewport, Metadata } from "next";
import Container from "@/components/Container";
import { montserrat, questrial } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Hamaad Siddiqui",
  description:
    "Full-Stack Developer excelling in crafting intuitive, efficient applications across industries. Passionate about staying current with industry developments and continuously expanding my skillset to deliver innovative solutions.",
  keywords: [
    "developer",
    "react",
    "javascript",
    "engineer",
    "software",
    "pakistan",
    "hamaad",
    "hammad",
    "siddiqui",
  ],
  metadataBase: new URL("https://hamaad.dev"),
  openGraph: {
    siteName: "Hamaad Siddiqui",
    type: "website",
    locale: "en_US",
    url: "https://hamaad.dev",
    title: "Hamaad Siddiqui",
    description:
      "Full-Stack Developer excelling in crafting intuitive, efficient applications across industries. Passionate about staying current with industry developments and continuously expanding my skillset to deliver innovative solutions.",
    images: [
      {
        url: "https://hamaad.dev/logo.png",
        width: 512,
        height: 512,
        alt: "hamaad-logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamaad Siddiqui",
    description:
      "Full-Stack Developer excelling in crafting intuitive, efficient applications across industries. Passionate about staying current with industry developments and continuously expanding my skillset to deliver innovative solutions.",
    creator: "@HamaadSiddiqui",
    site: "@HamaadSiddiqui",
    images: [
      {
        url: "https://hamaad.dev/logo.png",
        width: 512,
        height: 512,
        alt: "hamaad-logo",
      },
    ],
  },
  alternates: {
    canonical: "https://hamaad.dev",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },

  applicationName: "Hamaad Siddiqui",
  appleWebApp: {
    title: "Hamaad Siddiqui",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/metadata/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/metadata/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/metadata/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/metadata/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/metadata/apple-touch-icon.png",
        sizes: "180x180",
        rel: "apple-touch-icon",
      },
      {
        url: "/metadata/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/metadata/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      {
        url: "/metadata/apple-icon-120x120.png",
        sizes: "120x120",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/metadata/safari-pinned-tab.svg",
        color: "#000000",
        rel: "mask-icon",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Hamaad Siddiqui",
  url: "https://www.hamaad.dev",
  image: "https://www.hamaad.dev/avatar.jpg",
  sameAs: [
    "https://x.com/HamaadSiddiqui",
    "https://www.instagram.com/hamaad.co/",
    "https://www.linkedin.com/in/hamaad-siddiqui/",
    "https://github.com/Hamaad-Siddiqui/",
    "https://www.hamaad.dev",
  ],
  jobTitle: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${questrial.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background">
        <Container>{children}</Container>
        <SpeedInsights />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
