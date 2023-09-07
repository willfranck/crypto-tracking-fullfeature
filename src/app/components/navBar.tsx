'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { ProfileBtn, SigninPageBtn, SignoutBtn, RegisterBtn } from '@components/navBarButtons'


export default function NavBar() {
  const { data: session } = useSession()

  return (
    <nav className='w-full px-8 py-4'>
      {session ? (
        <div className='flex justify-between items-center'>
          <div className='rounded-full overflow-hidden'>
            <Image 
              src={'/crypto_logo.jpg'}
              alt='Crypto site logo'
              width={50}
              height={50}
            />
          </div>
          <div className='space-x-4'>
            <ProfileBtn />
            <SignoutBtn />
          </div>
        </div>
      ) : (
        <div className='flex justify-between items-center'>
          <div className='rounded-full overflow-hidden'>
            <Image 
              src={'/crypto_logo.jpg'}
              alt='Crypto site logo'
              width={50}
              height={50}
            />
          </div>
          <div className='space-x-4'>
            <RegisterBtn />
            <SigninPageBtn />
          </div>
        </div>
      )}
    </nav>
  )
}
