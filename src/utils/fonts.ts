import { Inter } from 'next/font/google'
import { Manrope } from 'next/font/google'
import { Poppins } from 'next/font/google'


export const inter = Inter({ subsets: ['latin']})

export const manrope = Manrope({ subsets: ['latin'] })

export const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
