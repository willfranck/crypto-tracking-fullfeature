'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { ProfilePageBtn, SigninPageBtn, SignoutBtn, RegisterPageBtn } from '@components/navButtons'


export default function NavBar() {
  const { data: session } = useSession()

  return (
    <nav className='w-full px-8 py-4'>
      {session ? (
        <div className='flex justify-between items-center'>
          <div className='rounded-full overflow-hidden'>
            <Link href={'/'}>
              <Image 
                src={'/crypto_logo.jpg'}
                alt='Crypto site logo'
                width={44}
                height={44}
              />
            </Link>
          </div>

          <div className='flex justify-center items-center space-x-4'>
            <ProfilePageBtn />
            <SignoutBtn />
          </div>
        </div>

      ) : (

        <div className='flex justify-between items-center'>
          <div className='rounded-full overflow-hidden'>
            <Image 
              src={'/crypto_logo.jpg'}
              alt='Crypto site logo'
              width={44}
              height={44}
            />
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
