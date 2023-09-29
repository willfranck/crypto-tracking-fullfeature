'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'


export const SigninPageBtn = () => {
  return (
    <Link
      href={'/pages/signin'}
      className='px-3 py-1.5 text-gray-400 text-sm font-semibold leading-6 rounded-md shadow-sm hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
    >
      Sign In
    </Link>
  )
}

export const GoogleSigninBtn = () => {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/pages/dashboard' })}
      className='flex justify-around items-center w-60 px-4 py-4 bg-white text-black font-semibold leading-6 rounded-md shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
    >
      <Image src={'/google_logo.svg'} alt='Google Logo' width={32} height={32} />
      <p>&ensp; Sign In with Google</p>
    </button>
  )
}

export const RegisterPageBtn = () => {
  return (
    <Link
      href={'/pages/register'}
      className='px-3 py-1.5 text-gray-400 text-sm font-semibold leading-6 rounded-md shadow-sm hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
    >
      Register
    </Link>
  )
}

export const SignoutBtn = () => {
  return (
    <button
      onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
      className='px-3 py-1.5 text-gray-400 text-sm font-semibold leading-6 rounded-md shadow-sm hover:text-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
    >
      Sign Out
    </button>
  )
}

export const ProfilePageBtn = () => {
  const { data: session } = useSession()

  return (
    <Link
      href={'/pages/dashboard'}
      onClick={() => (!session ? signIn(undefined, { callbackUrl: 'http://localhost:3000/pages/dashboard' }) : null)}
      className='w-6 h-6 flex justify-center items-center rounded-full overflow-hidden'
    >
      <Image 
        src={session?.user?.image!}
        alt='User Image'
        width={24}
        height={24}
      />
    </Link>
  )
}

export const Homepage = () => {
  return (
    <Link 
      href={'/'}
      className='flex justify-center items-center w-8 h-8'
    >
      <FontAwesomeIcon icon={faHouse} size='xl' />
    </Link>
  )
}
