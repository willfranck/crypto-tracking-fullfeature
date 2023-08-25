'use client'
import { signIn, signOut } from 'next-auth/react'
import Link from 'next/link'


export const SigninButton = () => {
  return (
    <Link 
      href={''}
      onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' })}
    >
      Sign In
    </Link>
  )
}

export const RegisterButton = () => {
  return (
    <Link 
      href={'/pages/register'}
     >
      Register
    </Link>
  )
}

export const SignoutButton = () => {
  return (
    <Link 
      href={''} 
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
    >
      Sign Out
    </Link>
  )
}

export const ProfileButton = () => {
  return (
    <Link
      href={''}
      onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' })}
    >
      Dashboard
    </Link>
  )
}
