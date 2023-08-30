'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SignoutBtn } from '@components/userNavButtons'
import Link from 'next/link'


export default function UserProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()


  if (!session && status === 'unauthenticated') {
    router.push('/api/auth/signin')

  } else if (session?.user) {
    return (
      <section>
        <nav>
          <h1>Dashboard</h1>

          <h2>Welcome {session?.user?.name}</h2>

          <SignoutBtn />
        </nav>

        <p>Saved Coins</p>

        <Link href={'/'}>Homepage</Link>
      </section>
    )
  }
}
