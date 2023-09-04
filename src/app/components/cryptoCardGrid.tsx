'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoCard from './cryptoCard'

interface Coin {
  uuid: string,
  iconURL: string,
  name: string,
  symbol: string,
  price: number,
  change: number,
}


export default function CryptoCardGrid() {
  const [currencies, setValues] = useState<Coin[]>([])

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        console.log(getCoins.data)
        setValues(getCoins.data)

        return getCoins

      } catch (error: any) {
          console.error(error)
      }
    }

    fetchCoins()
  }, [])

  return (
    <section className='grid'>
      {currencies && currencies.map((coin) => (
        <CryptoCard 
          key={coin.uuid}
          icon={coin.iconURL}
          name={coin.name}
          symbol={coin.symbol}
          price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
          change={coin.change}
        />
      ))}
    </section>
  )
}
