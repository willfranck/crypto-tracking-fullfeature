import Image from 'next/image'


export default function CryptoCard(cryptoProps: any) {
  return (
    <div className='flex justify-center items-center w-full p-3' >
      <div className='w-full max-w-sm'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center h-9 overflow-hidden'>
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
          <h2 className='w-52 truncate'>{cryptoProps.name}</h2>

          <div className='flex items-center mt-1'>
            <p>{cryptoProps.change}%</p>
            <span className='ml-4 text-gray-300'>24h</span>
          </div>
        </div>

        <div className='flex justify-end w-full mt-1'>
          <button className='saveCoinBtn flex items-center w-32 h-8 rounded-full text-2xl text-center bg-slate-500 hover:bg-indigo-500'>
            <p className='w-9'>+</p>
            <span>&ensp; Add coin</span>
          </button>
        </div>
      </div>
    </div>
  )
}
