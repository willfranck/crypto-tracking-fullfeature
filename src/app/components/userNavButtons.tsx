'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'


export const SigninPageBtn = () => {
  const { data: session } = useSession()

  return (
    <Link
      href={'/pages/signin'}
      onClick={() => (!session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null)}
      className='rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
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
      className='flex justify-around items-center w-60 rounded-md px-4 py-4 bg-white text-black font-semibold leading-6 shadow-sm hover:bg-gray-700 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      <Image src={'/google_logo.svg'} alt='Google Logo' width={32} height={32} />
      <span>&ensp; Sign In with Google</span>
    </button>
  )
}

export const RegisterBtn = () => {
  return (
    <Link
      href={'/pages/register'}
      className='rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Register
    </Link>
  )
}

export const SignoutBtn = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
      className='rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Sign Out
    </button>
  )
}

export const ProfileBtn = () => {
  const { data: session } = useSession()

  return (
    <Link
      href={'/pages/dashboard'}
      onClick={() => (!session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null)}
      className='rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
    >
      Dashboard
    </Link>
  )
}