import { NextAuthProvider } from './providers'
import type { Metadata } from 'next'
import { textFont } from '../utils/fonts'
import './globals.css'


export const metadata: Metadata = {
  title: 'Crypto Prices',
  description: 'Live up-to-date crypto price tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body 
        className={textFont.className + ' h-full'}
        suppressHydrationWarning={true}
      >
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  )
}
