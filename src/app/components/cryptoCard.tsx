import Image from 'next/image'


export default function CryptoCard() {
  return (
    <article className='flex justify-between w-80 h-17 px-2 py-1 rounded-md bg-gray-700'>
      <div className='flex items-center'>
        <div className='w-11'>
          <Image 
            src={'/google_logo.svg'}
            alt='Coin Logo'
            width={36}
            height={36}
          />
        </div>
        <div>
          <h3 className=''>G-Coin</h3>
          <span>SYMB</span>
        </div>
      </div>

      <div className='flex flex-col items-end w-28'>
          <h3>$20,000</h3>
          <div className='flex justify-between items-center w-full'>
            <p>+3.4%</p>
            <span>24h</span>
          </div>
      </div>
    </article>
  )
}
