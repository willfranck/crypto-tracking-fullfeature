'use client'
import { useState, useEffect } from 'react'
import { RegisterButton, SigninButton } from '@components/userNavButtons'
import { signIn } from 'next-auth/react'


export default function SignUp() {
  // const router = useRouter()
  // const [submitting, setSubmitting] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  // const handleSignUp = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   try {
  //     setSubmitting(true)

  //     if (res.status === 201) {
  //       router.push('/pages/dashboard')
  //     }

  //   } catch (error: any) {
  //       if (error.response.status === 409) {
  //         setSubmitting(false)
  //         setErrorMessage('User already exists')
  //       }
  //     }
  // }


  return (
    <main className='flex flex-col justify-center items-center min-h-full px-8'>
      <section className='w-full sm:mx-auto sm:w-full sm:max-w-sm'>
        {/* <div className='relative'>
          {errorMessage && (
            <div>
              <h2 className='absolute bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 '>
                {errorMessage}
              </h2>
            </div>
          )}
        </div> */}

        <h1 className='mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300'>
          Sign In
        </h1>

        <form className='flex flex-col items-center w-full mb-10 space-y-6'>
          <div className='w-full'>
            <label htmlFor='username' className='text-sm font-medium leading-6 text-gray-400'>
              Username
            </label>
            <input
              className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              id='username'
              type='text'
              required
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            ></input>
          </div>

          <div className='w-full'>
            <label htmlFor='password' className='text-sm font-medium leading-6 text-gray-400'>
              Password
            </label>
            <input
              className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              id='password'
              type='password'
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></input>
          </div>

          <div className='w-full space-y-4'>
            <button 
              className='w-full mt-6'
              type='submit'
            >
              <SigninButton />
            </button>

            <div className='flex justify-center items-center w-full'>
              <label>New here? &ensp;</label>

              <RegisterButton />
            </div>
          </div>
        </form>
      </section>
    </main>
  )
}
