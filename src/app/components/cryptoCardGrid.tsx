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
  const [slicedCurrencies, setSlicedCurrencies] = useState<Coin[]>([])
  const [coinSearch, setCoinSearch] = useState<string>('')

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')

        if (Array.isArray(getCoins.data.data.coins)) {
          setCurrencies(getCoins.data.data.coins)

          const sliceCoins = getCoins.data.data.coins.slice(0, 10)
          setSlicedCurrencies(sliceCoins)

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
  
  
  const handleCoinSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value.toLowerCase()
    setCoinSearch(inputValue)
  
    const searchCoins = inputValue ? 
      currencies.filter((coin: any) => {
        return (
          coin.name.toLowerCase().includes(inputValue) ||
          coin.symbol.toLowerCase().includes(inputValue)
        )
      }).slice(0, 10)
    : currencies.slice(0, 10)

    setSlicedCurrencies(searchCoins)
  }

  
  return (
    <div className='flex flex-col justify-start items-center w-full lg:ml-10'>
      <div className='flex justify-center w-full'>
        <form className='w-full xs:w-5/6 lg:w-3/4 mb-8'>
          <label htmlFor='site-search' className='text-sm font-medium leading-6 text-gray-400'>
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

        <form className='flex flex-col w-26 ml-6'>
          <label 
            htmlFor='Max Results' 
            className='text-sm font-medium leading-6 text-gray-400'
          >
            Max
          </label>
          <select 
            name='Max Results'
            className='w-full rounded-md border-0 px-3 py-1 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </form>
      </div>
    
      <div className='grid grid-cols-1 md:grid-cols-[minmax(256px,512px)_minmax(256px,512px)] gap-x-8 gap-y-4 w-full rounded-2xl bg-slate-900'>
        {slicedCurrencies &&
          slicedCurrencies.map((coin) => (
            <div className='flex justify-center'>
              <CryptoCard
                key={coin.uuid}
                icon={coin.iconUrl}
                name={coin.name}
                symbol={coin.symbol}
                price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
                change={coin.change}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
