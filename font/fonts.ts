import { Titillium_Web, Manrope } from 'next/font/google'

export const titillium = Titillium_Web({
  subsets: ['latin'], 
  weight: ['400', '600', '700', '900'],
  variable: '--font-title'
})

export const manrope = Manrope({
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-body'
})
