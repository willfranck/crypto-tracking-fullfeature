'use client'
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoCard, { Coin } from '@components/cryptoCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export default function HeroCoins() {
  const [currencies, setCurrencies] = useState<Coin[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        const coinData = getCoins.data

        if (Array.isArray(coinData)) {
          const filteredCoins = coinData.filter((coin: Coin) => {
            return (
              coin.symbol === 'BTC' || 
              coin.symbol === 'ETH' 
            )
          })

          setCurrencies(filteredCoins)

        } else {
            console.error('Received data is not an array')
        }

        return NextResponse.json(getCoins, { status: 200 })

      } catch (error: any) {
          console.error(error)
      
      } finally {
          setLoading(false)
      }

    }
    fetchCoins()
  }, [])


  return (
    <>
      {loading ? (
        <div className='flex justify-center items-center w-full h-full'>
          <FontAwesomeIcon icon={faSpinner} size='2xl' spin className='w-12 h-12' />
        </div>
      ) : (
        <div className='hero-coins flex flex-col lg:flex-row justify-around items-center lg:space-x-12 px-6 py-8'>
          {currencies &&
            currencies.map((coin) => (
              <CryptoCard
                key={coin.uuid}
                uuid={coin.uuid}
                iconUrl={coin.iconUrl}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.price}
                change={coin.change}
                savedCoins={coin.savedCoins}
                updateSavedCoins={coin.updateSavedCoins}
                disabled={coin.disabled}
              />
            ))}
        </div>
      )}
    </>
  )
}
