'use client'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import styles from '@styles/page.module.css'


export default function UserProfile({ params }: any) {
  const router = useRouter()

  const logout = async () => {
    try {
      await axios.get('/api/logout')
      router.push('/pages/login')
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <section className={styles.center}>
      <nav className={styles.center}>
        <h1>Dashboard</h1>

        <h2>Welcome { params.id }</h2>

        <button onClick={logout}>Log Out</button>
      </nav>

      <p>Saved Coins</p>
    </section>
  )
}
