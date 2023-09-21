import { titleFont } from '../../utils/fonts'
import HeroCoins from './heroCoins'

function HeroCard() {
  return (
    <section className='relative flex flex-col items-center w-full bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-cover'>
      <article className='flex flex-col w-full space-y-10 px-8 py-20'>
        <h1 className={titleFont.className + ''}>Today's Crypto Prices</h1>

        <div>
          <span>a Full Stack demo built with:</span>
          <p>NextJS &ensp;|&ensp; ReactJS &ensp;|&ensp; MongoDB</p>
          <p>TypeScript &ensp;|&ensp; Tailwind CSS</p>
        </div>

        <div>
          <span>also implementing:&ensp;</span>
          <p>Next Auth &ensp;|&ensp; Mongoose &ensp;|&ensp; Axios</p>
          <p>RapidAPI &ensp;|&ensp; bcrypt &ensp;|&ensp; JSONwebtoken</p>
          <p></p>
        </div>

        <div className='pt-10'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe tenetur tempora fugit, voluptatibus itaque
            sint officiis vero ut harum quod nostrum eaque beatae modi voluptatem neque molestiae ex dignissimos?
            Consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur, temporibus aut eum
            accusamus voluptates placeat quod ad consectetur ratione autem obcaecati voluptatibus, omnis repellat
            cumque? Dolorum amet velit aspernatur?
          </p>
        </div>
      </article>

      <article className='flex flex-col xl:flex-row w-11/12 xl:w-5/6 px-4 rounded-3xl bg-slate-900'>
        <HeroCoins />
      </article>
    </section>
  )
}

export default HeroCard
