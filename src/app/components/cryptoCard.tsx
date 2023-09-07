import Image from 'next/image'


export default function CryptoCard(cryptoProps: any) {
  return (
    <article className='flex justify-between w-full h-16 px-3 rounded-sm bg-slate-900 border-b border-solid border-slate-500' >
      <div className='flex items-center max-h-16'>
        <div className='w-9 mr-3'>
          <Image 
            src={cryptoProps.icon}
            alt={cryptoProps.name}
            width={36}
            height={36}
          />
        </div>
        <div className='w-36'>
          <p className='truncate'>{cryptoProps.name}</p>
          <span>{cryptoProps.symbol}</span>
        </div>
      </div>

      <div className='flex flex-col items-end w-28'>
        <h3 className='text-green-400'>${cryptoProps.price}</h3>
        <div className='flex items-center'>
          <p>{cryptoProps.change}%</p>
          <span className='ml-4 text-gray-300'>24h</span>
        </div>
      </div>
    </article>
  )
}
