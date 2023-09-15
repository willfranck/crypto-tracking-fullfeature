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
    <article className=''>
      <form className='w-full'>
        <label htmlFor='site-search'></label>
        <input
          type='search'
          placeholder='Find coins...'
          className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        ></input>
      </form>

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
    </article>
  )
}
