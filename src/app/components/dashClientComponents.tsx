'use client'
import { getSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import DashMenu from '@components/dashMenu'
import SavedCoins from '@components/dashSavedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function ClientComponents() {
  const session = getSession()
  const [activeDatatype, setActiveDatatype] = useState<string>('saved-coins')

  useEffect(() => {
    if(!session) {
      redirect('/signin')
    }
  }, [session])

  const handleActiveDatatypeChange = (datatype: string) => {
    setActiveDatatype(datatype)
  }


  return (
    <>
      <DashMenu 
        activeDatatypeChange={handleActiveDatatypeChange}
      />

      {activeDatatype === 'saved-coins' ? (
        <SavedCoins />

        ) : activeDatatype === 'search-coins' ? (
          <CryptoCardGrid />

        ) : null
      }
    </>
  )
}