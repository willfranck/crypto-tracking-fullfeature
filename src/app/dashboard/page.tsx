'use client'
import { useState } from 'react'
import NavBar from '@components/navBar'
import DashMenu from '@components/dashMenu'
import SavedCoins from '@components/dashSavedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function UserProfile() {
  const [activeDatatype, setActiveDatatype] = useState<string>('saved-coins')

  const handleActiveDatatypeChange = (datatype: string) => {
    setActiveDatatype(datatype)
  }


  return (
    <main className='relative flex flex-col items-center w-full max-w-page min-h-screen mx-auto bg-dash bg-fixed bg-top isolate before:absolute before:content-{""} before:inset-0 before:bg-tintBlack before:-z-10'>
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
    </main>
  )
}
