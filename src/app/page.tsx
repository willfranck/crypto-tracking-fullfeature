import NavBar from '@components/navBar'
import HeroCard from '@components/heroCard'
import CryptoCardGrid from '@components/cryptoCardGrid'


export default function Home() {
  return (
    <main className='flex flex-col items-center xl:container min-h-full mx-auto'>
      <NavBar />

      <HeroCard />

      <CryptoCardGrid />
    </main>
  )
}
