import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jungeun Kim Portfolio",
  description: "Personal Portfolio",

  openGraph: {
    title: "Jungeun Kim Portfolio",
    description: "AI Security · Graph Machine Learning · Phishing Detection",
    url: "https://jungeunkim-portfolio.vercel.app/",
    siteName: "Jungeun Kim Portfolio",
    images: [
      {
        url: "/images/open_graph_image.png",
        width: 1200,
        height: 630,
        alt: "Jungeun Kim Portfolio",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Jungeun Kim Portfolio",
    description: "AI Security · Graph Machine Learning · Phishing Detection",
    images: ["/images/open_graph_image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}
      <Analytics />
      </body>
    </html>
  );
}