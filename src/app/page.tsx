import NavBar from '@components/navBar'
import HeroCard from '@components/heroCard'


export default function Home() {
  return (
    <main className='flex flex-col items-center w-full max-w-page min-h-full mx-auto '>
      <NavBar />
      <HeroCard />
    </main>
  )
}
