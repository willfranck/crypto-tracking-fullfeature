import NavBar from '@components/navBar'
import HeroCard from '@components/homeHeroCard'
import DemoInfo from './components/homeDemoInfo'


export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center w-full max-w-page min-h-screen mx-auto '>
      <NavBar />
      <HeroCard />
      <DemoInfo />
    </main>
  )
}
