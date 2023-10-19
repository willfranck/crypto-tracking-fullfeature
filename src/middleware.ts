import withAuth from "next-auth/middleware"
import { authOptions } from '@lib/auth'

export const config = { matcher: '/dashboard' }

export default withAuth({
  pages: {
    signIn: '/signin',
  },
  
  jwt: { decode: authOptions.jwt?.decode },
  callbacks: {
    authorized: ({ token }) => !!token,
  },
})
