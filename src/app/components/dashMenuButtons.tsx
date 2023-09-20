import Link from 'next/link'


export function DashMenuBtns(btnProps: any) {
  return (
    <button
      datatype={btnProps.datatype}
      aria-label={btnProps.aria}
      className={btnProps.active ? 'w-full text-center text-white scale-110' : 'w-full text-center text-slate-400'}
      onClick={btnProps.setActive}
    >
      {btnProps.label}
    </button>
  )
}

export const Homepage = () => {
  return (
    <Link 
      href={'/'}
      className='flex justify-center items-center w-full h-full border-b-2 border-slate-800'
    >
      <p>Homepage</p>
    </Link>
  )
}
