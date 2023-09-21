import { useState, useEffect } from 'react'
import buttons from '@utils/buttons'
import { DashMenuBtns } from '@components/dashMenuButtons'
import { Homepage } from '@components/navButtons'

interface MenuBtns {
  key: number,
  datatype: string,
  label: string,
  aria: string,
  active: boolean,
}

interface DashMenuProps {
  activeDatatypeChange: (datatype: string) => void,
}


export default function DashMenu({activeDatatypeChange}: DashMenuProps) {
  const [dashMenuBtns, setDashMenuBtns] = useState<MenuBtns[]>([])

  useEffect(() => {
    function getDashMenuBtns() {
      const btnData = buttons.dashBtns
      setDashMenuBtns(btnData)
    }

    getDashMenuBtns()
  }, [])

  function handleActiveBtn(key: number) {
    const updatedButtons = buttons.dashBtns.map((button) => ({
      ...button,
      active: button.key === key,
    }))

    setDashMenuBtns(updatedButtons)

    const activeBtn = updatedButtons.find((button) => button.active);
    if (activeBtn) {
      activeDatatypeChange(activeBtn.datatype);
    }
  }


  return (
    <aside className='sticky top-0 flex justify-center items-start w-full lg:w-60 min-h-full my-6 md:px-6 bg-black border-b-2 lg:border-b-0 lg:border-r-2 border-slate-800'>
      <ul className='flex lg:flex-col justify-center items-center w-full'>
        <li className='flex justify-center items-center w-2/3 h-20 text-slate-400'>
          <h3>MENU</h3>
        </li>

        {dashMenuBtns && 
          dashMenuBtns.map((btnProps) => (
            <li className='flex justify-center items-center w-2/3 h-20'>
              <DashMenuBtns 
                key={btnProps.key}
                datatype={btnProps.datatype}
                label={btnProps.label}
                aria={btnProps.aria}
                active={btnProps.active}
                setActive={() => handleActiveBtn(btnProps.key)}
              />
            </li>
          ))
        }

        <li className='flex justify-center items-center w-2/3 h-20 text-slate-400'>
          <Homepage />
        </li>
      </ul>
    </aside>
  )
} 
