'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import NavBar from '@components/navBar'
import UserNav from '@components/userNav'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function UserProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()


  if (!session && status === 'unauthenticated') {
    router.push('/api/auth/signin')

  } else if (session?.user) {
    return (
      <section>
        <NavBar />

        <div className='flex flex-col md:flex-row'>
          <UserNav />
          <CryptoCardGrid />
        </div>
      </section>
    )
  }
}
