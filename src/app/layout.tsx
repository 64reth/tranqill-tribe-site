import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tranqill Tribe",
  description:
    "Songwriting, production and performance collective creating emotionally charged electronic music.",
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