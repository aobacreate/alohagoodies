import type { Metadata } from "next";
import { Quicksand, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
});

export const metadata: Metadata = {
  title: "Aloha Goodies",
  description: "A curated selection of Hawaiian-inspired accessories and goods.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${quicksand.variable} ${notoSansJP.variable}`}>
        {children}
      </body>
    </html>
  );
}

