import { useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import { inter } from '@utils/fonts'


export type Coin = {
  uuid: string,
  iconUrl: string,
  name: string,
  symbol: string,
  price: number,
  change: number,
  savedCoins: string[],
  updateSavedCoins: (updatedCoins: string[]) => void,
  disabled: boolean,
}

export default function CryptoCard(cryptoProps: Coin) {
  const [updatingUserCoins, setUpdatingUserCoins] = useState(false)
  const userSavedCoins = cryptoProps.savedCoins || []

  async function handleSubmit(symbol: string) {
    try {
      setUpdatingUserCoins(true)
      
      await axios.patch('/api/updateSavedCoins', { symbol })

      const updatedCoins = await axios.get('/api/getSavedCoins')
      cryptoProps.updateSavedCoins(updatedCoins.data)

    } catch (error: any) {
        console.error(`Error saving coin ${symbol}:`, error.message)
    
    } finally {
        setUpdatingUserCoins(false)
    }
  }


  return (
    <div className={inter.className + ' flex flex-col justify-center items-center self-center p-3 w-full min-w-cardMin max-w-sm'}>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center h-9 overflow-hidden'>
          <Image 
            src={cryptoProps.iconUrl}
            alt={cryptoProps.name}
            width={36}
            height={36}
            className='mr-3'
          />
          <span className='text-gray-300'>{cryptoProps.symbol}</span>
        </div>
        
        <h3 className='text-green-400'>$
          {cryptoProps.price > 0.009 ?
            (Math.round(100 * cryptoProps.price) / 100).toFixed(2) :
            (Math.round(1e9 * cryptoProps.price) / 1e9).toFixed(9)
          }
        </h3>
      </div>
      
      <div className='flex justify-between w-full'>
        <h3 className='w-full truncate'>{cryptoProps.name}</h3>

        <div className='flex items-center mt-1 ml-4'>
          <p>{cryptoProps.change}%</p>
          <span className='ml-4 text-gray-300'>24h</span>
        </div>
      </div>

      {!userSavedCoins.includes(cryptoProps.symbol) ? (
        <div className='flex justify-end w-full mt-1'>
          <button 
            key={cryptoProps.symbol}
            type='submit'
            aria-label='Save Coin'
            onClick={() => handleSubmit(cryptoProps.symbol)}
            disabled={updatingUserCoins}
            className='saveCoinBtn flex items-center w-24 h-8 rounded-l-full text-2xl text-center bg-slate-500 hover:bg-indigo-500'
          >
            <p className='w-8 pb-0.5'>+</p>
            <span className='ml-2.5'>Save</span>
          </button>
        </div>
        ) : (
        <div className='flex justify-end w-full mt-1'>
          <button 
            key={cryptoProps.symbol}
            type='submit'
            aria-label='Remove Coin'
            onClick={() => handleSubmit(cryptoProps.symbol)}
            disabled={updatingUserCoins}
            className='saveCoinBtn flex items-center w-24 h-8 rounded-l-full text-2xl text-center bg-red-500 hover:bg-indigo-500'
          >
            <p className='w-8'>-</p>
            <span>Remove</span>
          </button>
        </div>
        )
      }
    </div>
  )
}
