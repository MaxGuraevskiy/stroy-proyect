import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "СтройПроект",
  description:
    "СтройПроект- компания занимающаяся строительством и архитектурой больше 15лет",
  keywords: [
    "СтройПроект",
    "Строительная фирма",
    "Стройка",
    "Проект",
    "Строительство",
  ],
  authors: [{ name: "Max", url: "https://guraevskiy.ru" }],
  creator: "Maxim Guraevskiy",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "СтройПроект",
    description:
      "СтройПроект- компания занимающаяся строительством и архитектурой больше 15лет",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    authors: ["Max"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
