'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import NavBar from '@components/navBar'
import { MyCoins, Search, Homepage } from '@components/dashNavButtons'
import SavedCoins from '@components/savedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function UserProfile() {
  const { data: session, status } = useSession()

  if (!session && status === 'unauthenticated') {
    redirect('/pages/signin')

  } else if (session?.user) {
    return (
      <main className='flex flex-col items-center w-full max-w-page min-h-full mx-auto'>
        <NavBar />

        <section className='flex flex-col md:flex-row w-11/12 sm:w-3/4'>
          <aside className='md:w-60 min-h-full my-6 md:mr-6'>
            <ul className='flex md:flex-col items-center w-full'>
              <li className='flex justify-center items-center w-2/3 h-20 border-b-2 border-slate-800'>
                <h3>MENU</h3>
              </li>

              <li className='flex items-center w-2/3 h-20 border-b-2 border-slate-800'>
                <MyCoins />
              </li>
              <li className='flex items-center w-2/3 h-20 border-b-2 border-slate-800'>
                <Search />
              </li>

              <li className='flex items-center w-2/3 h-20'>
                <Homepage />
              </li>
            </ul>
          </aside>

          <article>
            <SavedCoins />
            <CryptoCardGrid />  
          </article>
        </section>
      </main>
    )
  }
}
