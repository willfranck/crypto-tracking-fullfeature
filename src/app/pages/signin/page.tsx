'use client'
import { useState, useEffect } from 'react'
import { RegisterBtn, GoogleSigninBtn } from '@components/userNavButtons'
import { signIn } from 'next-auth/react'


export default function SignInPage() {
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({
    username: '',
    password: '',
  })

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setSubmitting(true)

      signIn('credentials', {
        username: user.username,
        password: user.password,
        callbackUrl: 'http://localhost:3000/pages/dashboard',
      })

    } catch (error: any) {
        setSubmitting(false)
        setErrorMessage('Invalid credentials')
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
    <main className='flex flex-col justify-center items-center min-h-full px-8'>
      <section className='relative w-full sm:mx-auto sm:w-full sm:max-w-sm'>
        {errorMessage && (
          <div>
            <h2 className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 '>
              {errorMessage}
            </h2>
          </div>
        )}

        <h1 className='mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300'>
          {submitting ? 'Loading' : 'Sign In'}
        </h1>

        <form
          onSubmit={handleSignIn}
          className='flex flex-col items-center w-full mb-20 space-y-6'
        >
          <div className='w-full'>
            <label
              htmlFor='username'
              className='text-sm font-medium leading-6 text-gray-400'
            >
              Username
            </label>
            <input
              id='username'
              type='text'
              required
              value={user.username}
              autoComplete='on'
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            >
            </input>
          </div>

          <div className='w-full'>
            <label
              htmlFor='password'
              className='text-sm font-medium leading-6 text-gray-400'
            >
              Password
            </label>
            <input
              id='password'
              type='password'
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            >
            </input>
          </div>

          <div className='w-full space-y-4'>
            <button
              type='submit'
              disabled={buttonDisabled}
              className='w-full mt-6 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign In
            </button>

            <div className='flex justify-center items-center w-full'>
              <label>New here? &ensp;</label>

              <RegisterBtn />
            </div>
          </div>
        </form>
      </section>

      <section className='mb-6'>
        <GoogleSigninBtn />
      </section>
    </main>
  )
}