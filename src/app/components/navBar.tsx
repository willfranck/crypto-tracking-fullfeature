'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { ProfilePageBtn, SigninPageBtn, SignoutBtn, RegisterPageBtn } from '@components/navButtons'


export default function NavBar() {
  const { data: session } = useSession()

  return (
    <nav className='w-full p-4 bg-black'>
      {session ? (
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href={'/'}>
              <Image 
                src={'/crypto_logo.webp'}
                alt='Crypto site logo'
                width={44}
                height={44}
                className='rounded-full overflow-hidden'
              />
            </Link>
          </div>

          <div className='flex justify-center items-center space-x-4'>
            <SignoutBtn />
            <ProfilePageBtn />
          </div>
        </div>

      ) : (

        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <Link href={'/'}>
              <Image 
                src={'/crypto_logo.webp'}
                alt='Crypto site logo'
                width={44}
                height={44}
                className='rounded-full overflow-hidden'
              />
            </Link>
          </div>

          <div className='flex justify-center items-center space-x-4'>
            <RegisterPageBtn />
            <SigninPageBtn />
          </div>
        </div>
      )}
    </nav>
  )
}
