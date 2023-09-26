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

export default function SavedCoins() {
  const [slicedUserCoins, setSlicedUserCoins] = useState<Coin[]>([])
  const [userSavedCoins, setUserSavedCoins] = useState<string[]>([])
  const [isFetchingSavedCoins, setIsFetchingSavedCoins] = useState(false)

  useEffect(() => {
    const fetchUserCoins = async () => {
      try {
        setIsFetchingSavedCoins(true)

        const getUserCoins = await axios.get('/api/getSavedCoins')

        if (Array.isArray(getUserCoins.data.savedCoins)) {
          const userCoins = getUserCoins.data.savedCoins
          setUserSavedCoins(userCoins)

          const getCoins = await axios.get('/api/coins')

          if (Array.isArray(getCoins.data.data.coins)) {
            const sliceCoins = getCoins.data.data.coins.filter((coin: any) => {
              return userCoins.includes(coin.symbol)
            })
            setSlicedUserCoins(sliceCoins)
          }

        } else {
            console.error('Received data is not an array')
        }

      } catch (error: any) {
          console.error(error)

      } finally {
          setIsFetchingSavedCoins(false)
      }
    }

    if (!isFetchingSavedCoins) {
      fetchUserCoins()
    }
  }, [userSavedCoins])


  if (userSavedCoins.length === 0) {
    return (
      <div className='flex flex-col flex-1 justify-center items-center text-center w-full h-80 space-y-4'>
        <h3>Looking pretty empty here...</h3>
        <span>Search and add some coins</span>
      </div>
    )

  } else {
    return (
      <div className='flex flex-col justify-start items-center w-full lg:ml-10'>
        <div>
          <p className='mt-10 text-sm font-medium leading-6 text-gray-400'>sorted by Market Cap</p>
        </div>

        <div className='flex justify-center items-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-[minmax(256px,512px)_minmax(256px,512px)] gap-x-8 gap-y-4 w-full lg:w-auto rounded-2xl bg-slate-900'>
            {slicedUserCoins &&
              slicedUserCoins.map((coin) => (
                <div className='flex justify-center w-full' key={coin.uuid}>
                  <CryptoCard
                    icon={coin.iconUrl}
                    name={coin.name}
                    symbol={coin.symbol}
                    price={Number(Math.round(100 * coin.price) / 100).toFixed(2)}
                    change={coin.change}
                    isCoinSaved={userSavedCoins.includes(coin.symbol)? true : false}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}