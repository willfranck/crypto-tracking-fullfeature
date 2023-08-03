'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'
import styles from '@styles/page.module.css'


export default function SignUp() {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const onSignUp = async () => {

  }




  return (
    <div className={styles.center}>
      <h1>Sign Up</h1>
    </div>
  )
}
