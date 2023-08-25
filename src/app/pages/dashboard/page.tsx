'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import styles from '@styles/page.module.css'


export default function UserProfile() {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get('/api/logout')
      router.push('/')

    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <section className={styles.center}>
      <nav className={styles.center}>
        <h1>Dashboard</h1>

        <h2>Welcome</h2>

        <button onClick={logout}>Log Out</button>
      </nav>

      <p>Saved Coins</p>
    </section>
  )
}
