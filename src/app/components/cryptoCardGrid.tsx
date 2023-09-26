import { useState, useEffect } from 'react'
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
  const [maxResults, setMaxResults] = useState<number>(10)
  const [userSavedCoins, setUserSavedCoins] = useState<string[]>([])
  const [savingCoin, setSavingCoin] = useState(false)
  const [removingCoin, setRemovingCoin] = useState(false)
  const [isFetchingSavedCoins, setIsFetchingSavedCoins] = useState(false)


  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')

        if (Array.isArray(getCoins.data.data.coins)) {
          setCurrencies(getCoins.data.data.coins)

          const sliceCoins = getCoins.data.data.coins.slice(0, maxResults)
          setSlicedCurrencies(sliceCoins)

        } else {
            console.error('Received data is not an array')
        }

      } catch (error: any) {
          console.error(error)
      
      }
    }
    
    fetchCoins()
  }, [])

  useEffect(() => {
    const fetchUserSavedCoins = async () => {
      try {
        const getUserSavedCoins = await axios.get('/api/getSavedCoins')

        if (Array.isArray(getUserSavedCoins.data.savedCoins)) {
          const userCoins = getUserSavedCoins.data.savedCoins
          setUserSavedCoins(userCoins)
        }
      
      } catch (error: any) {
          console.error('Received data is not an array')
      
      } finally {
          setIsFetchingSavedCoins(false)
      }
    }

    fetchUserSavedCoins()
  }, [isFetchingSavedCoins])

  useEffect(() => {
    const filteredCoins = currencies.filter((coin) =>
      coin.name.toLowerCase().includes(coinSearch.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(coinSearch.toLowerCase())
    );

    const sliceCoins = filteredCoins.slice(0, maxResults);
    
    setSlicedCurrencies(sliceCoins);
  }, [currencies, coinSearch, maxResults]);


  function handleCoinSearch(e: React.FormEvent<HTMLInputElement>) {
    const inputValue = e.currentTarget.value.toLowerCase();
    setCoinSearch(inputValue);
  }

  async function handleSubmit(symbol: string) {
    if (!userSavedCoins.includes(symbol)) {
      try {
        setSavingCoin(true)
        
        await axios.patch('/api/updateSavedCoins', { symbol })

        setIsFetchingSavedCoins(true)
        
      } catch (error: any) {
          console.error(`Error saving coin ${symbol}:`, error.message)
      
      } finally {
          setSavingCoin(false)
      
      }

    } else if (userSavedCoins.includes(symbol)) {
      try {
        setRemovingCoin(true)
        
        await axios.patch('/api/updateSavedCoins', { symbol })

        setIsFetchingSavedCoins(true)

      } catch (error: any) {
          console.error(`Error removing coin ${symbol}:`, error.message)
      
      } finally {
          setRemovingCoin(false)
      }
    }
  }  

  
  return (
    <div className='flex flex-col justify-start items-center w-full lg:ml-10'>
      <div className='flex justify-center w-full lg:w-11/12 mb-8'>
        <form className='flex-1'>
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
    
      <div className='flex justify-center items-center w-full'>
        <div className='grid grid-cols-1 md:grid-cols-[minmax(256px,512px)_minmax(256px,512px)] gap-x-8 gap-y-4 w-full lg:w-auto rounded-2xl bg-slate-900'>
          {slicedCurrencies &&
            slicedCurrencies.map((coin) => (
              <div className='flex justify-center w-full' key={coin.uuid}>
                <CryptoCard
                  icon={coin.iconUrl}
                  name={coin.name}
                  symbol={coin.symbol}
                  price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
                  change={coin.change}
                  isSavedCoin={userSavedCoins.includes(coin.symbol)? true : false}
                  handleSubmit={() => handleSubmit(coin.symbol)}
                  disabled={savingCoin || removingCoin}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
