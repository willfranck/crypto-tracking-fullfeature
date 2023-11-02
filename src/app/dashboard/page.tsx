'use client'
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import NavBar from '@components/navBar'
import DashMenu from '@components/dashMenu'
import SavedCoins from '@components/dashSavedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function UserProfile() {
  const { data: session, update } = useSession()
  const [activeDatatype, setActiveDatatype] = useState<string>('saved-coins')

  const handleActiveDatatypeChange = (datatype: string) => {
    setActiveDatatype(datatype)
  }

  useEffect(() => {
    const fetchSession = setInterval(() => update(), 1000 * 60)
    return () => clearInterval(fetchSession)
  }, [session, update])


  return (
    <main className='relative flex flex-col items-center w-full max-w-page min-h-screen mx-auto bg-dash bg-fixed bg-top isolate before:absolute before:content-{""} before:inset-0 before:bg-tintBlack before:-z-10'>
      {session ? (
        <>
          <NavBar />

          <section className='flex flex-col flex-1 lg:flex-row items-center lg:items-start w-11/12 sm:w-5/6'>
            <DashMenu 
              activeDatatypeChange={handleActiveDatatypeChange}
            />

            {activeDatatype === 'saved-coins' ? (
              <SavedCoins />

              ) : activeDatatype === 'search-coins' ? (
                <CryptoCardGrid />

              ) : null
            }
          </section>
        </>
        ) : (
          signOut()
        )
      }
    </main>
  )
}
