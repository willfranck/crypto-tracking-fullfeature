import Image from 'next/image'


export default function CryptoCard(cryptoProps: any) {
  return (
    <article className='flex justify-between w-full sm:min-w-sm h-16 px-3 rounded-md bg-gray-700'>
      <div className='flex items-center max-h-16'>
        <div className='w-9 mr-3'>
          <Image 
            src={cryptoProps.icon}
            alt={cryptoProps.name}
            width={36}
            height={36}
          />
        </div>
        <div className='w-22 sm:w-32'>
          <p className='truncate'>{cryptoProps.name}</p>
          <span>{cryptoProps.symbol}</span>
        </div>
      </div>

      <div className='flex flex-col items-end w-28'>
          <h3>${cryptoProps.price}</h3>
          <div className='flex justify-between items-center w-full'>
            <p>{cryptoProps.change}%</p>
            <span className='text-gray-400'>24h</span>
          </div>
      </div>
    </article>
  )
}
