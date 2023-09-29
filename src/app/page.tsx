import NavBar from '@components/navBar'
import HeroCard from '@components/heroCard'


export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center w-full max-w-page min-h-screen mx-auto '>
      <NavBar />
      <HeroCard />
    </main>
  )
}
