import { titleFont } from '../../utils/fonts'
import HeroCoins from './heroCoins'


function HeroCard() {
  return (
    <section className='relative flex flex-col md:flex-row justify-between items-center w-full p-4 h-hero bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-cover'>
      <article>
        <h1 className={titleFont.className + ' py-4'}>Today's Crypto Prices</h1>

        <div className='mt-4'>
          <span>a Full Stack demo built with:</span>
          <p>NextJS &ensp;|&ensp; ReactJS &ensp;|&ensp; MongoDB</p>
          <p>TypeScript &ensp;|&ensp; Tailwind CSS</p>
        </div>

        <div className='mt-4'>
          <span>also implementing:&ensp;</span>
          <p>Next Auth &ensp;|&ensp; Mongoose &ensp;|&ensp; Axios</p>
          <p>RapidAPI &ensp;|&ensp; bcrypt &ensp;|&ensp; JSONwebtoken</p>
          <p></p>
        </div>
      </article>

      <article>
        <HeroCoins />
      </article>
    </section>
  )
}

export default HeroCard
