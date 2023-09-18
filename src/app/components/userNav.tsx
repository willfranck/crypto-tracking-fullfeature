import { MyCoins, Search, Homepage } from '@components/userNavButtons'


export default function UserNav() {
  return (
    <article className='md:w-60 min-h-full my-6 md:mr-6'>
      <ul className='flex md:flex-col items-center w-full'>
        <li className='flex justify-center items-center w-2/3 h-20 border-b-2 border-slate-800'>
          <h3>MENU</h3>
        </li>

        <li className='flex items-center w-2/3 h-20 border-b-2 border-slate-800'>
          <MyCoins />
        </li>
        <li className='flex items-center w-2/3 h-20 border-b-2 border-slate-800'>
          <Search />
        </li>

        <li className='flex items-center w-2/3 h-20'>
          <Homepage />
        </li>
      </ul>
    </article>
  )
}