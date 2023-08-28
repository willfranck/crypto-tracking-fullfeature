'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SignoutButton } from '@components/userNavButtons'
import styles from '@styles/page.module.css'


export default function UserProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()


  if (!session && status === 'unauthenticated') {
    router.push('/api/auth/signin')

  } else if (session?.user) {
    return (
      <section className={styles.center}>
        <nav className={styles.center}>
          <h1>Dashboard</h1>

          <h2>Welcome {session?.user?.name}</h2>

          <SignoutButton />
        </nav>

        <p>Saved Coins</p>
      </section>
    )
  }
}
