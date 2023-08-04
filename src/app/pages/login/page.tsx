'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import React, { useState } from 'react'
import styles from '@styles/page.module.css'


export default function Login() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const onLogin = async () => {
    console.log('Submitted');
    
  }


  return (
    <section className={styles.center}>
      <h1>Log In</h1>

      <form className={styles.center}>
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
          onClick={onLogin}
        >
          Submit
        </button>

        <label>New here?</label>
        <Link href='/pages/signup'>SIGN UP</Link>
      </form>     
    </section>
  )
}
