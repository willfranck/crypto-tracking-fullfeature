'use client'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import buttons from '@utils/buttons'
import NavBar from '@components/navBar'
import { DashMenuBtns, Homepage } from '@components/dashMenuButtons'
import SavedCoins from '@components/savedCoins'
import CryptoCardGrid from '@components/cryptoCardGrid'

interface MenuBtns {
  key: number,
  datatype: string,
  label: string,
  aria: string,
  active: boolean,
}


export default function UserProfile() {
  const { data: session, status } = useSession()
  const [dashMenuBtns, setDashMenuBtns] = useState<MenuBtns[]>([])
  const [activeDatatype, setActiveDatatype] = useState<string>('')

  useEffect(() => {
    function getDashMenuBtns() {
      const btnData = buttons.dashBtns
      setDashMenuBtns(btnData)

      const activeBtn = btnData.find((button) => button.active)
      if (activeBtn) {
        setActiveDatatype(activeBtn.datatype)
      }
    }

    getDashMenuBtns()
  }, [])


  function handleActiveBtn(key: number) {
    const updatedButtons = buttons.dashBtns.map((button) => ({
      ...button,
      active: button.key === key,
    }))

    buttons.dashBtns = updatedButtons
    setDashMenuBtns(updatedButtons)
    
    const activeBtn = updatedButtons.find((button) => button.active)
    if (activeBtn) {
      setActiveDatatype(activeBtn.datatype)
    }
  }


  if (!session && status === 'unauthenticated') {
    redirect('/pages/signin')

  } else if (session?.user) {
    return (
      <main className='flex flex-col items-center w-full max-w-page min-h-full mx-auto'>
        <NavBar />

        <section className='flex flex-col flex-1 lg:flex-row items-center lg:items-start w-11/12 sm:w-5/6'>
          <aside className='sticky top-0 flex justify-center items-start w-full lg:w-60 min-h-full my-6 md:mr-6 bg-black'>
            <ul className='flex lg:flex-col justify-center items-center w-full'>
              <li className='flex justify-center items-center w-2/3 h-20 text-slate-400 border-b-2 border-slate-800'>
                <h3>MENU</h3>
              </li>

              {dashMenuBtns && 
                dashMenuBtns.map((btnProps) => (
                  <li className='flex justify-center items-center w-2/3 h-20 border-b-2 border-slate-800'>
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

          <article className='flex justify-center lg:items-center flex-1 w-full xl:max-w-full'>
            {activeDatatype === 'saved-coins' ? (
                <SavedCoins />

              ) : activeDatatype === 'search-coins' ? (
                <CryptoCardGrid />

              ) : null
            }
          </article>
        </section>
      </main>
    )
  }
}
