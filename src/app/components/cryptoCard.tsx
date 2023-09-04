import Image from 'next/image'


export default function CryptoCard(cryptoProps: any) {
  return (
    <article className='flex justify-between w-80 h-17 px-2 py-1 rounded-md bg-gray-700'>
      <div className='flex items-center'>
        <div className='w-11'>
          <Image 
            src={cryptoProps.icon}
            alt={cryptoProps.name}
            width={36}
            height={36}
          />
        </div>
        <div>
          <h3>{cryptoProps.name}</h3>
          <p>{cryptoProps.symbol}</p>
        </div>
      </div>

      <div className='flex flex-col items-end w-28'>
          <h3>{cryptoProps.price}</h3>
          <div className='flex justify-between items-center w-full'>
            <p>{cryptoProps.change}%</p>
            <span>24h</span>
          </div>
      </div>
    </article>
  )
}
