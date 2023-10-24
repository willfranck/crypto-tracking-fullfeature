'use client'
import { useState } from 'react'
import DashMenu from '@components/dashMenu'
import SavedCoins from '@components/dashSavedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function DashClientComponents() {
  const [activeDatatype, setActiveDatatype] = useState<string>('saved-coins')

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