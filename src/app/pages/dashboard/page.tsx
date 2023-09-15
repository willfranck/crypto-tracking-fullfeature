'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
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
      <main className='flex flex-col items-center w-full max-w-page min-h-full mx-auto'>
        <NavBar />

        <section className='flex flex-col md:flex-row'>
          <UserNav />

          <CryptoCardGrid />
        </section>
      </main>
    )
  }
}
