'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'


export const SigninButton = () => {
  const { data: session } = useSession()

  return (
    <Link 
      href={'/pages/dashboard'}
      onClick={() => !session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null}
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
  const { data: session } = useSession()

  return(
    <Link 
      href={'/pages/dashboard'}
      onClick={() => !session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null}
    >
      Dashboard
    </Link>
  )
}