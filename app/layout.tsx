import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Gourdes Magnétiques Premium | Phone Attachment Water Bottles',
  description: 'Discover our premium magnetic water bottles with phone attachment. Stay hydrated while keeping your phone secure. Free shipping on orders over $50.',
  keywords: 'magnetic water bottle, phone attachment, portable water bottle, premium hydration',
  openGraph: {
    title: 'Gourdes Magnétiques Premium',
    description: 'Premium water bottles with magnetic phone attachment',
    type: 'website',
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
      </head>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
