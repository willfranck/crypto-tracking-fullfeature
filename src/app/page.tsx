import Image from 'next/image'
import NavBar from '@components/navBar'
import HeroCard from '@components/heroCard'
import CryptoCard from '@components/cryptoCard'

export default function Home() {
  return (
    <main className='flex flex-col justify-between items-center xl:container min-h-full mx-auto'>
      <NavBar />

      <HeroCard />

      <CryptoCard />
    </main>
  )
}
