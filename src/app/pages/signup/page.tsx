'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import React, { useState } from 'react'
import styles from '@styles/page.module.css'


export default function SignUp() {
  const router = useRouter()
  const [buttonDisabled, setButton] = useState(false)
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  })


  const onSignUp = async () => {
    console.log('Submitted');
    
  }


  return (
    <section className={styles.center}>
      <h1>Sign Up</h1>

      <form className={styles.center}>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='text'
          value={user.email}
          placeholder= 'Enter your email'
          onChange={(e) => setUser({...user, email: e.target.value})}
        >
        </input>
        
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          value={user.username}
          placeholder='Choose your username'
          onChange={(e) => setUser({...user, username: e.target.value})}
        >
        </input>

        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={user.password}
          placeholder='Create a unique password'
          onChange={(e) => setUser({...user, password: e.target.value})}
        >
        </input>

        <button
          type='submit'
          onClick={onSignUp}
        >
          Submit
        </button>

        <label>Already Signed Up?</label>
        <Link href='/pages/login'>Login</Link>
      </form>     
    </section>
  )
}
