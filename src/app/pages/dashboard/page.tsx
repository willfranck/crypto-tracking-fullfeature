'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import NavBar from '@components/navBar'
import DashMenu from '@components/dashMenu'
import SavedCoins from '@components/dashSavedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function UserProfile() {
  const { data: session, status } = useSession()
  const [activeDatatype, setActiveDatatype] = useState<string>('saved-coins')

  const handleActiveDatatypeChange = (datatype: string) => {
    setActiveDatatype(datatype)
  }


  if (!session && status === 'unauthenticated') {
    redirect('/pages/signin')

  } else if (session?.user) {
    return (
      <main className='flex flex-col items-center w-full max-w-page mx-auto'>
        <NavBar />

        <section className='flex flex-col flex-1 lg:flex-row items-center lg:items-start w-11/12 sm:w-5/6'>
          <DashMenu 
            activeDatatypeChange={handleActiveDatatypeChange}
          />

          <article className='flex flex-1 w-full'>
            {activeDatatype === 'saved-coins' ? (
              <SavedCoins />

              ) : activeDatatype === 'search-coins' ? (
                <CryptoCardGrid />

              ) : null
            }
          </article>
        </section>
      </main>
    )
  }
}
