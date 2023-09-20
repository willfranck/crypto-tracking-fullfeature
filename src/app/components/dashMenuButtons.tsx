import Link from 'next/link'


export function DashMenuBtns(btnProps: any) {
  return (
    <button
      datatype={btnProps.datatype}
      aria-label={btnProps.aria}
      className={btnProps.active ? 'w-full text-white' : 'w-full text-slate-400'}
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
      className='w-full text-center'
    >
      <p>Homepage</p>
    </Link>
  )
}
