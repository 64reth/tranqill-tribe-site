import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://tranqill-tribe.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Tranqill Tribe",
  title: "Tranqill Tribe | Music That Moves The Body. Sound That Wakes The Soul.",
  description:
    "Tranqill Tribe is a songwriting, production and performance collective creating emotionally driven electronic music for the dancefloor and beyond.",
  keywords: [
    "Tranqill Tribe",
    "Electronic Music",
    "Afro House",
    "Soulful House",
    "Music Production",
    "Songwriting",
    "DJ Collective",
    "Festival Music",
    "Dance Music",
  ],
  authors: [{ name: "Tranqill Tribe" }],
  creator: "Tranqill Tribe",
  publisher: "Tranqill Tribe",
  icons: {
    icon: "/logos/tranqill-circle.png",
    shortcut: "/logos/tranqill-circle.png",
    apple: "/logos/tranqill-circle.png",
  },
  openGraph: {
    title: "Tranqill Tribe",
    description: "Music that moves the body. Sound that wakes the soul.",
    url: siteUrl,
    siteName: "Tranqill Tribe",
    images: [
      {
        url: "/images/hero-stage.png",
        alt: "Tranqill Tribe stage atmosphere",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tranqill Tribe",
    description: "Music that moves the body. Sound that wakes the soul.",
    images: ["/images/hero-stage.png"],
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "profile:instagram": "https://www.instagram.com/tranqill_tribe/",
    "profile:tiktok": "https://www.tiktok.com/@tranqilltribe",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
