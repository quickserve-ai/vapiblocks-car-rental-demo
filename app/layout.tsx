import type { Metadata, Viewport } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from '@/app/components/ui/toaster';

import './globals.css';

import { fontSans } from '@/app/lib/fonts';
import { absoluteUrl, cn } from '@/app/lib/utils';
import { siteConfig } from '@/config/site';
import FloatyExample from './components/floaty';

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl('/')),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: {
    name: siteConfig.author.name,
    url: siteConfig.author.url,
  },
  creator: siteConfig.author.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: `@${siteConfig.author.name}`,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: '#000000' },
        elements: {
          formButtonPrimary:
            'bg-black border border-black border-solid hover:bg-white hover:text-black',
          socialButtonsBlockButton:
            'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
          socialButtonsBlockButtonText: 'font-semibold',
          formButtonReset:
            'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
          membersPageInviteButton:
            'bg-black border border-black border-solid hover:bg-white hover:text-black',
          card: 'bg-[#fafafa]',
        },
      }}
    >
      <html lang="en" className={fontSans.variable}>
        <body>
          <div className="relative flex flex-col">{children}</div>
          <FloatyExample />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
