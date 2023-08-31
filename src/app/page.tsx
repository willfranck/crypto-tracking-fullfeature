import Image from 'next/image'
import NavBar from '@components/navBar'
import HeroCard from '@components/heroCard'

export default function Home() {
  return (
    <main className='flex flex-col items-center xl:container min-h-screen mx-auto p-6'>
      <NavBar />

      <HeroCard />
    </main>
  )
}
