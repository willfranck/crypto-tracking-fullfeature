import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isPublicPath = path === '/pages/login' || path === '/pages/signup'
  const token = req.cookies.get('Token')?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/pages/dashboard', req.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
}

export const config = {
  matcher: [
    '/page',
    '/pages/signup',
    '/pages/login',
    '/pages/dashboard'
  ]
}