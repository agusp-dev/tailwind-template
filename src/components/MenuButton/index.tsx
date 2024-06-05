export const MenuButton = () => {
  return (
    <button 
      type='button'
      className='
        p-1
        rounded
      text-slate-500
      hover:text-slate-900
      hover:bg-slate-100
        focus:ring-1
      focus:ring-slate-200
      '
    >
      <svg 
        xmlns='http://www.w3.org/2000/svg' 
        fill='none' 
        className='h-6 w-6'
        viewBox='0 0 24 24' 
        strokeWidth={1.5} 
        stroke='currentColor' 
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
      </svg>
    </button>
  )
}
