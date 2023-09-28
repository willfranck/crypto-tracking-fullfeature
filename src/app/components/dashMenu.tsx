import { useState, useEffect } from 'react'
import { Homepage } from '@components/navButtons'


interface DashMenuProps {
  activeDatatypeChange: (datatype: string) => void,
}

interface BtnProps {
  key: number,
  datatype: string,
  label: string,
  aria: string,
}

export default function DashMenu({activeDatatypeChange}: DashMenuProps) {
  const [activeBtn, setActiveBtn] = useState('saved-coins')

  const buttons = [
    {key: 0, datatype: 'saved-coins', label: 'SAVED', aria: 'Saved Coins'},
    {key: 1, datatype: 'search-coins', label: 'SEARCH', aria: 'Search Coins'},
  ]

  function handleActiveBtn(datatype: string) {
    setActiveBtn(datatype)
    activeDatatypeChange(datatype)
  }


  return (
    <aside className='sticky top-0 flex justify-center items-start w-full lg:w-40 min-h-full mt-6 md:px-6 bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-slate-800'>
      <ul className='flex lg:flex-col justify-between items-center w-full'>
        <li className='flex justify-center items-center h-20 text-slate-400'>
          <h3>MENU</h3>
        </li>

        {buttons.map((button: BtnProps) => (
          <li className='flex justify-center items-center h-20'>
            <button
              key={button.key}
              datatype={button.datatype}
              aria-label={button.aria}
              onClick={() => handleActiveBtn(button.datatype)}
              className={activeBtn === button.datatype ? 'w-full text-center text-white scale-110' : 'w-full text-center text-slate-400'}
            >
              {button.label}
            </button>
          </li>
        ))}

          
        <li className='flex justify-center items-center h-20 text-slate-400'>
          <Homepage />
        </li>
      </ul>
    </aside>
  )
} 
