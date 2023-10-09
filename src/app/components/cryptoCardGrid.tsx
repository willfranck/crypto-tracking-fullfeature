import { useState, useEffect, KeyboardEventHandler, KeyboardEvent } from 'react'
import axios from 'axios'
import CryptoCard, { Coin } from '@components/cryptoCard'


export default function CryptoCardGrid() {
  const [currencies, setCurrencies] = useState<Coin[]>([])
  const [slicedCurrencies, setSlicedCurrencies] = useState<Coin[]>([])
  const [userSavedCoins, setUserSavedCoins] = useState<string[]>([])
  const [coinSearch, setCoinSearch] = useState<string>('')
  const [maxResults, setMaxResults] = useState<number>(10)

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        const coinData = getCoins.data.data.coins

        const getUserSavedCoins = await axios.get('/api/getSavedCoins')
        const userCoins = getUserSavedCoins.data.savedCoins
        setUserSavedCoins(userCoins)

        if (Array.isArray(coinData)) {
          setCurrencies(coinData)

        } else {
            console.error('Received data is not an array')
        }
      } catch (error: any) {
          console.error(error)
      }
    }
    fetchCoinData()
  }, [])

  useEffect(() => {
    const sliceCoinData = async () => {
      try {
        const sliceCoins = currencies.slice(0, maxResults)
        setSlicedCurrencies(sliceCoins)

      } catch (error: any) {
          console.log(error)
      }
    }
    sliceCoinData()
  }, [currencies, maxResults])

  useEffect(() => {
    const filteredCoins = currencies.filter((coin) =>
      coin.name.toLowerCase().includes(coinSearch.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(coinSearch.toLowerCase())
    )

    const sliceCoins = filteredCoins.slice(0, maxResults);
    
    setSlicedCurrencies(sliceCoins);
  }, [currencies, coinSearch, maxResults])


  function handleCoinSearch(e: React.FormEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value
    setCoinSearch(inputValue)
  }

  function dismissKeyboard(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.currentTarget.blur()
    }
  }

  
  return (
    <article className='flex flex-col justify-start items-center w-full lg:pl-10'>
      <div className='sticky top-[58px] lg:top-0 flex justify-center w-full pt-6 pb-8 px-4 bg-black'>
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className='flex-1'
        >
          <label htmlFor='site-search' className='text-sm font-medium leading-6 text-gray-400'>
            Find Coins...
          </label>
          <input
            name='site-search'
            type='text'
            enterKeyHint='search'
            placeholder='Name | Symbol'
            value={coinSearch}
            onChange={handleCoinSearch}
            onKeyUp={dismissKeyboard}
            className='w-full rounded-md border-0 px-3 py-1.5 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          ></input>
        </form>

        <form className='flex flex-col ml-6 w-20'>
          <label 
            htmlFor='Max Results' 
            className='text-sm font-medium leading-6 text-gray-400'
          >
            Max
          </label>
          <select 
            name='Max Results'
            value={maxResults}
            onChange={(e) => setMaxResults(Number(e.target.value))}
            className='w-full rounded-md border-0 px-3 py-1 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </form>
      </div>

      <div>
        <p className='text-sm font-medium leading-6 text-gray-400'>sorted by Market Cap</p>
      </div>
    
      <div className='flex justify-center items-start w-full'>
        <div className='grid grid-cols-1 md:grid-cols-[minmax(256px,512px)_minmax(256px,512px)] gap-x-8 gap-y-4 w-full md:w-auto lg:max-h-cardGrid py-4 rounded-xl bg-tintBlack overflow-y-auto'>
          {slicedCurrencies &&
            slicedCurrencies.map((coin) => (
              <div className='flex justify-center w-full' key={coin.uuid}>
                <CryptoCard
                  uuid={coin.uuid}
                  iconUrl={coin.iconUrl}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={coin.price}
                  change={coin.change}
                  savedCoins={userSavedCoins}
                  updateSavedCoins={setUserSavedCoins}
                  disabled={coin.disabled}
                />
              </div>
            ))
          }
        </div>
      </div>
    </article>
  )
}
