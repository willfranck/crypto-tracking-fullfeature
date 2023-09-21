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
