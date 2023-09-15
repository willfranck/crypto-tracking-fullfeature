import Image from 'next/image'


export default function CryptoCard(cryptoProps: any) {
  return (
    <div className='min-w-ss max-w-lg mx-auto my-10 px-3' >
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <Image 
            src={cryptoProps.icon}
            alt={cryptoProps.name}
            width={36}
            height={36}
            className='mr-3'
          />
          <span className='text-gray-300'>{cryptoProps.symbol}</span>
        </div>
        
        <h2 className='text-green-400'>${cryptoProps.price}</h2>
      </div>

      <div className='flex justify-between'>
        <h2 className='truncate'>{cryptoProps.name}</h2>

        <div className='flex items-center mt-1'>
          <p>{cryptoProps.change}%</p>
          <span className='ml-4 text-gray-300'>24h</span>
        </div>
      </div>
    </div>
  )
}
