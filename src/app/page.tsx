import NavBar from '@components/navBar'
import HeroCard from '@components/homeHeroCard'
import Preview from '@components/homeDemoPreview'
import Footer from '@components/footer'


export default function Home() {
  return (
    <main className='flex flex-col flex-1 items-center w-full max-w-page min-h-screen mx-auto'>
      <NavBar />
      <HeroCard />
      <Preview />
      <Footer />
    </main>
  )
}
