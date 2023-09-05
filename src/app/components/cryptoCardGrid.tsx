'use client'
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


export default function CryptoCardGrid() {
  const [currencies, setValues] = useState<Coin[]>([])
  const [priceChangeText, setPriceChangeText] = useState(null)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        console.log(getCoins.data)

        if (Array.isArray(getCoins.data.data.coins)) {
          setValues(getCoins.data.data.coins)

        } else {
            console.error('Received data is not an array')
        }

        return getCoins

      } catch (error: any) {
          console.error(error)
      }
    }

    fetchCoins()
  }, [])

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-auto mx-auto my-4'>
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
