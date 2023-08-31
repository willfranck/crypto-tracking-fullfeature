'use client'
import { useSession } from "next-auth/react"
import { ProfileBtn, SigninPageBtn, SignoutBtn, RegisterBtn } from "./userNavButtons"


export default function NavBar() {
  const { data: session } = useSession()

  
  return (
    <nav className='flex justify-end w-full mb-6'>
      {session ? (
        <div className='flex space-x-4'>
          <ProfileBtn />
          <SignoutBtn />
        </div>

      ) : (
        <div className='flex space-x-4'>
          <RegisterBtn />
          <SigninPageBtn />
        </div>
      )}
    </nav>
  )
}
