import { titleFont } from '@utils/fonts'
import HeroCoins from '@components/homeHeroCoins'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons/faSquareGithub' 
import Link from 'next/link'

export default function HeroCard() {
  return (
    <section className='relative flex flex-col items-center w-full bg-hero bg-cover bg-center isolate before:-z-10 before:absolute before:content-[""] before:inset-0 before:bg-tintBlack'>
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

        <Link
          href={'https://github.com/willfranck/crypto-tracking-fullfeature'}
          className='flex justify-center items-center w-72 h-16 p-4 text-gray-400 hover:text-white'
        >
          <span className=''>view the full code on Github:&emsp;</span>
          <FontAwesomeIcon icon={faSquareGithub} size='2xl' />
        </Link>
      </article>

      <article className='translate-y-1/2 w-11/12 md:w-5/6 px-4 rounded-3xl bg-black'>
        <HeroCoins />
      </article>

      <aside className='flex flex-col md:flex-row justify-center items-center w-full pt-36 pb-14 bg-tintGray'>
        <div className='p-8 space-y-2 md:text-right'>
          <p>This demo was made to showcase my ability to adapt and learn new frameworks & libraries</p>
          <p>It's the first project I've done using using NextJS, TypeScript, and Tailwind CSS</p>
          <p>Thanks so much for checking it out!&ensp;All feedback is appreciated</p>
        </div>

        <ul className='flex flex-col justify-center list-disc w-5/6 max-w-infoCard space-y-4 pt-6 pl-10 md:pt-0 border-white border-t-2 md:border-l-2 md:border-t-0'>
          <h2><li>Create an account</li></h2>
          <h2><li>Search currencies</li></h2>
          <h2><li>Bookmark favorites</li></h2>
        </ul>
      </aside>
    </section>
  )
}
