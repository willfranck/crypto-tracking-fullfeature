import { titleFont } from '@utils/fonts'
import HeroCoins from '@components/homeHeroCoins'


export default function HeroCard() {
  return (
    <section className='relative flex flex-col items-center w-full bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tint'>
    <article className='flex flex-col w-full space-y-10 px-8 pt-20'>
      <h1 className={titleFont.className}>Today's Crypto Prices</h1>

      <div>
        <span className='text-gray-400'>a Full Stack demo built with:</span>
        <p>NextJS &ensp;|&ensp; ReactJS &ensp;|&ensp; MongoDB</p>
        <p>TypeScript &ensp;|&ensp; Tailwind CSS</p>
      </div>

      <div>
        <span className='text-gray-400'>also implementing:&ensp;</span>
        <p>RapidAPI &ensp;|&ensp; Axios &ensp;|&ensp; Mongoose</p>
        <p>Next-Auth &ensp;|&ensp; bcrypt &ensp;|&ensp; JSONwebtoken</p>
        <p></p>
      </div>

    </article>

    <article className='translate-y-1/2 w-11/12 md:w-5/6 px-4 rounded-3xl bg-slate-900'>
      <HeroCoins />
    </article>
  </section>
  )
}
