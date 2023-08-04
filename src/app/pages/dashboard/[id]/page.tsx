import styles from '@styles/page.module.css'

export default function UserProfile({params}: any) {
  return (
    <section className={styles.center}>
        <h1>Dashboard</h1>
        <p>{params.id}</p>
        <p>Saved Coins</p>
    </section>
  )
}
