import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Music',
  description: 'Simple music player for the personal use',
};

const font = localFont({ src: './font.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
