'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { SigninButton, SignoutButton } from '@components/buttons.component'
import styles from '@styles/page.module.css'


export default function UserProfile() {
  const router = useRouter()
  const { data: session, status } = useSession()

  console.log(session, status);
  

  if (status === 'authenticated') {
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

  } else if (status === 'unauthenticated') {
      router.push('/api/auth/signin')
  }
}
