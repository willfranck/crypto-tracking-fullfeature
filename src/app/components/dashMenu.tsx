import { useState } from 'react'
import { Homepage } from '@components/navButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark'


interface DashMenuProps {
  activeDatatypeChange: (datatype: string) => void,
}

interface BtnProps {
  key: number,
  datatype: string,
  icon: IconDefinition,
  aria: string,
}

export default function DashMenu({activeDatatypeChange}: DashMenuProps) {
  const [activeBtn, setActiveBtn] = useState('saved-coins')

  const buttons = [
    {
      key: 0, 
      datatype: 'saved-coins', 
      icon: faBookmark, 
      aria: 'Saved Coins'
    },
    {
      key: 1, 
      datatype: 'search-coins', 
      icon: faMagnifyingGlass, 
      aria: 'Search Coins'
    },
  ]

  function handleActiveBtn(datatype: string) {
    setActiveBtn(datatype)
    activeDatatypeChange(datatype)
  }


  return (
    <aside className='sticky top-0 flex justify-center items-center w-full lg:w-auto lg:h-80 mt-6 md:px-6 lg:rounded-full bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-slate-800'>
      <ul className='flex lg:flex-col justify-around items-center w-full h-14 lg:h-full'>
        {buttons.map((button: BtnProps) => (
          <li className='flex justify-center items-center' key={button.key}>
            <button
              datatype={button.datatype}
              aria-label={button.aria}
              onClick={() => handleActiveBtn(button.datatype)}
              className={activeBtn === button.datatype ? 
                'w-8 h-8 text-white scale-110 hover:text-indigo-500' :
                'w-8 h-8 text-slate-400 hover:text-indigo-500'}
            >
              <FontAwesomeIcon icon={button.icon} size='xl' />
            </button>
          </li>
        ))}
          
        <li className='flex justify-center items-center text-slate-400 hover:text-indigo-500'>
          <Homepage />
        </li>
      </ul>
    </aside>
  )
} 
