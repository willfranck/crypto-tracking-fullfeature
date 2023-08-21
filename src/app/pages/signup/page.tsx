'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Link from 'next/link'
import styles from '@styles/page.module.css'


export default function SignUp() {
  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  })

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setSubmitting(true)

      const res = await axios.post('/api/signup', user)
      if (res.status === 201) {
        router.push('/pages/login')
      }

    } catch (error: any) {
        if (error.response.status === 409) {
          setErrorMessage('User already exists')
        }

    } finally {
        setSubmitting(false)
    }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.username.length > 0 && user.password.length >= 6) {
      setButtonDisabled(false)
      
    } else {
      setButtonDisabled(true)
    }
  }, [user])


  return (
    <section className={styles.center}>
      <h1>{submitting ? 'Loading' : 'Sign Up'}</h1>

      <form className={styles.center} onSubmit={handleSignUp}>
        <div className={styles.formInputs}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          ></input>
        </div>
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
            placeholder=' Must be at least 6 digits'
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          ></input>
        </div>

        <button
          className={styles.submitButton}
          disabled={buttonDisabled}
          type='submit'
        >
          Register
        </button>

        <label>Already Signed Up?</label>
        <Link href='/pages/login'>LOG IN</Link>
      </form>

      {errorMessage && (
        <div>
          <h2>{errorMessage}</h2>
        </div>
      )}
    </section>
  )
}
