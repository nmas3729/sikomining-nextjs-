import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import AnalyticsTracker from '@/components/AnalyticsTracker'

import ScriptsLoader from '@/components/ScriptsLoader'

export const metadata: Metadata = {
  title: 'Siko Mining - Your Trusted Mining Partner',
  description: 'Siko Mining provides comprehensive mining solutions and services',
  icons: {
    icon: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* CSS Files */}
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/font-awesome.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/css/pogo-slider.min.css" />
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/responsive.css" />
      </head>
      <body>
        <AnalyticsTracker />
        {children}
        <ScriptsLoader />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-PZ1PS818DR"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-PZ1PS818DR');
            `,
          }}
        />
      </body>
    </html>
  )
}
