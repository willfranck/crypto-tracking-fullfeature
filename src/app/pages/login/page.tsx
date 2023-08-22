'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import styles from '@styles/page.module.css'


export default function Login() {
  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setSubmitting(true)

      const res = await axios.post('/api/login', user)
      if (res.status === 200) {
        router.push('/pages/dashboard')
      }

    } catch (error: any) {
        if (error.response.status === 400) {
          setSubmitting(false)
          setErrorMessage('Login info incorrect')
        }
      }
  }

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])


  return (
    <section className={styles.center}>
      <h1>{submitting ? 'Loading' : 'Log In'}</h1>

      <form className={styles.center}>
        <div className={styles.formInputs}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          ></input>
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </div>

        <button 
          className={styles.submitButton}
          disabled={buttonDisabled}
          type='submit'
          onClick={onLogin}
        >
          Submit
        </button>

        <label>New here?</label>
        <Link href='/pages/signup'>SIGN UP</Link>
      </form>

      {errorMessage && (
        <div>
          <h2>{errorMessage}</h2>
        </div>
      )}
    </section>
  )
}
