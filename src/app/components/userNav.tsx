import { Uuid, Tiers, OrderBy } from '@components/userNavButtons'
import Link from 'next/link'


export default function UserNav() {
  return (
    <article className='flex flex-col justify-between items-center w-full md:w-40 my-6'>
      <div className='flex md:flex-col w-full'>
        <Uuid />
        <Tiers />
        <OrderBy />
      </div>
      <div>
        <Link href={'/'}>
          <h3>Homepage</h3>
        </Link>
      </div>
    </article>
  )
}