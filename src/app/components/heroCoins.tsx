'use client'
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoCard, { Coin } from './cryptoCard'


export default function HeroCoins() {
  const [currencies, setCurrencies] = useState<Coin[]>([])

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        const coinData = getCoins.data.data.coins

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
      }
    }
    fetchCoins()
  }, [])


  return (
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
  )
}
