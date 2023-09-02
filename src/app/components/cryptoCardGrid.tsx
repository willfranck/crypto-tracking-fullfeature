'use client'
import { useEffect } from 'react'
import axios from 'axios'
import CryptoCard from './cryptoCard'

export default function CryptoCardGrid() {

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const getCoins = await axios.get('/api/coins')
        console.log(getCoins.data)
        return getCoins

      } catch (error: any) {
        console.error(error)
      }
    }

    fetchCoins()
  }, [])

  return (
    <section className='grid'>
      <CryptoCard />
    </section>
  )
}
