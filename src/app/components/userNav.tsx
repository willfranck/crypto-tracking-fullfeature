import { Uuid, Tiers, OrderBy } from '@components/userNavButtons'
import Link from 'next/link'


export default function UserNav() {
  return (
    <article className='flex flex-col items-center md:w-40 my-6'>
      <ul>
        <li>
          <Uuid />
        </li>
        <li>
          <Tiers />
        </li>
        <li>
          <OrderBy />
        </li>
        <li>
          <Link href={'/'}>
            <h3>Homepage</h3>
          </Link>
        </li>
      </ul>
    </article>
  )
}