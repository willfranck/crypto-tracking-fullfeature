'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CryptoCard from './cryptoCard'

interface Coin {
  uuid: string,
  iconUrl: string,
  name: string,
  symbol: string,
  tier: number,
  price: number,
  change: number,
}


export default function CryptoCardGrid() {
  const [currencies, setCurrencies] = useState<Coin[]>([])
  const [coinSearch, setCoinSearch] = useState<string>('')

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')

        if (Array.isArray(getCoins.data.data.coins)) {
          const filteredCoins = getCoins.data.data.coins.slice(0, 10)

          setCurrencies(filteredCoins)

        } else {
            console.error('Received data is not an array')
        }

        return getCoins

      } catch (error: any) {
          console.error(error)
      }
    }

    if (coinSearch === '') {
      fetchCoins()
    }
  }, [coinSearch])
  
  
  const handleCoinSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    setCoinSearch(inputValue)
  
    const filteredCoins = currencies.filter((coin: any) => {
      return (
        coin.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(inputValue.toLowerCase())
      )
    })

    setCurrencies(filteredCoins)
  }

  
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <form className='w-full xs:w-5/6 md:w-3/4 mb-8'>
        <label htmlFor='site-search' className='text-sm font-medium leading-6 text-gray-400'
        >
          Find Coins...
        </label>
        <input
          id='site-search'
          type='search'
          placeholder='Name | Symbol'
          value={coinSearch}
          onChange={handleCoinSearch}
          className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        ></input>
      </form>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-2 w-full max-w-lg xl:max-w-full rounded-2xl bg-slate-900'>
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
          ))
        }
      </div>
    </div>
  )
}
