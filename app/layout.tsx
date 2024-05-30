import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "TMA Next.js Template",
  description: "A Next.js template with TMA.js SDK and TonConnect UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
