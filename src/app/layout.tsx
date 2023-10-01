import { NextAuthProvider } from './providers'
import type { Metadata } from 'next'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { textFont } from '../utils/fonts'
import './globals.css'

library.add(fas, fab)

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
