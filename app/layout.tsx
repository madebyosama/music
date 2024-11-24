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
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='Music' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='robots' content='noindex, nofollow' />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
