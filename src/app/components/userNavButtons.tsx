'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'


export const SigninPageBtn = () => {
  const { data: session } = useSession()

  return (
    <Link
      href={'/pages/signin'}
      onClick={() => (!session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null)}
      className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Sign In
    </Link>
  )
}

export const GoogleSigninBtn = () => {
  return (
    <button
      type='submit'
      onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/pages/dashboard' })}
      className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Sign In with Google
    </button>
  )
}

export const RegisterBtn = () => {
  return (
    <Link
      href={'/pages/register'}
      className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Register
    </Link>
  )
}

export const SignoutBtn = () => {
  return (
    <Link
      href={''}
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
      className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Sign Out
    </Link>
  )
}

export const ProfileBtn = () => {
  const { data: session } = useSession()

  return (
    <Link
      href={'/pages/dashboard'}
      onClick={() => (!session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null)}
      className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Dashboard
    </Link>
  )
}