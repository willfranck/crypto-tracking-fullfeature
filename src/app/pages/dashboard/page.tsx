'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SignoutBtn } from '@components/userNavButtons'


export default function UserProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()


  if (!session && status === 'unauthenticated') {
    router.push('/api/auth/signin')

  } else if (session?.user) {
    return (
      <section>
        <nav className='flex justify-end w-full'>
          <SignoutBtn />
        </nav>

        <p>Saved Coins</p>

        <Link href={'/'}>Homepage</Link>
      </section>
    )
  }
}
