import { useState, useEffect } from 'react'
import axios from 'axios'
import CryptoCard, { Coin } from '@components/cryptoCard'


export default function SavedCoins() {
  const [currencies, setCurrencies] = useState<Coin[]>([])
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([])
  const [userSavedCoins, setUserSavedCoins] = useState<string[]>([])

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        const coinData = getCoins.data
        
        const getUserSavedCoins = await axios.get('/api/getSavedCoins')
        const userCoins = getUserSavedCoins.data
        setUserSavedCoins(userCoins)
        
        if (Array.isArray(coinData)) {
          setCurrencies(coinData)

          const filterCoins = coinData.filter((coin: Coin) => {
            return userCoins.includes(coin.symbol)
          })
          setFilteredCoins(filterCoins)

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
    const updatedFilter = currencies.filter((coin: Coin) => {
      return userSavedCoins.includes(coin.symbol)
    })
    setFilteredCoins(updatedFilter)
    setUserSavedCoins(userSavedCoins)
  }, [userSavedCoins, currencies])


  if (userSavedCoins.length === 0) {
    return (
      <article className='flex flex-col justify-center items-center w-full h-80 space-y-4'>
        <h3>Looking pretty empty here...</h3>
        <span>Search and add some coins</span>
      </article>
    )

  } else {
    return (
      <article className='flex flex-col justify-start items-center w-full lg:ml-10'>
        <div>
          <p className='mt-10 text-sm font-medium leading-6 text-gray-400'>sorted by Market Cap</p>
        </div>

        <div className='flex justify-center items-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-[minmax(256px,512px)_minmax(256px,512px)] gap-x-8 gap-y-4 w-full md:w-auto lg:max-h-cardGrid py-4 rounded-xl bg-tintBlack overflow-y-auto'>
            {filteredCoins &&
              filteredCoins.map((coin) => (
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
}