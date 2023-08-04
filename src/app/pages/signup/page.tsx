'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from '@styles/page.module.css'


export default function SignUp() {
  const router = useRouter()
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  })

  useEffect(() => {
    if (user.email.length > 0 && user.username.length > 0 && user.password.length >= 6) {
      setButtonDisabled(false)
    } else {
        setButtonDisabled(true)
    }

  }, [user])

  const onSignUp = async () => {
    console.log('Submitted');
    
  }


  return (
    <section className={styles.center}>
      <h1>Sign Up</h1>

      <form className={styles.center}>
        <div className={styles.formInputs}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='text'
            value={user.email}
            placeholder= 'Enter your email'
            onChange={(e) => setUser({...user, email: e.target.value})}
          >
          </input>
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={user.username}
            placeholder='Choose your username'
            onChange={(e) => setUser({...user, username: e.target.value})}
          >
          </input>
        </div>
        <div className={styles.formInputs}>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={user.password}
            placeholder='Create a unique password'
            onChange={(e) => setUser({...user, password: e.target.value})}
          >
          </input>
        </div>

        <button
          className={styles.submitButton}
          type='submit'
          onClick={onSignUp}
        >
          {buttonDisabled ? 'X' : 'Register'}
        </button>

        <label>Already Signed Up?</label>
        <Link href='/pages/login'>LOG IN</Link>
      </form>     
    </section>
  )
}
