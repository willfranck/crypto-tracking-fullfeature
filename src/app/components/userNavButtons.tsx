import Link from 'next/link'


export const MyCoins = () => {
  return (
    <button className='w-full h-16 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
      Saved Coins
    </button>
  )
}

export const Search = () => {
  return (
    <button className='w-full h-16 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
      Search
    </button>
  )
}

export const Homepage = () => {
  return (
    <button className='w-full h-16 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'>
      <Link href={'/'}>
        <p>Homepage</p>
      </Link>
    </button>
  )
}
