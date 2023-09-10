'use client'
import { NextResponse } from 'next/server'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoCard from './cryptoCard'

interface Coin {
  uuid: string,
  iconUrl: string,
  name: string,
  symbol: string,
  price: number,
  change: number,
}


export default function HeroCoins() {
  const [currencies, setCurrencies] = useState<Coin[]>([])

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')

        if (Array.isArray(getCoins.data.data.coins)) {
          const filteredCoins = getCoins.data.data.coins.filter((coin: any) => {
            return (
              coin.symbol === 'BTC' || 
              coin.symbol === 'ETH' || 
              coin.symbol === 'DOGE'
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
    <section className='w-full'>
      {currencies &&
        currencies.map((coin) => (
          <CryptoCard
            key={coin.uuid}
            icon={coin.iconUrl}
            name={coin.name}
            symbol={coin.symbol}
            price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
            change={coin.change}
          />
        ))}
    </section>
  )
}
