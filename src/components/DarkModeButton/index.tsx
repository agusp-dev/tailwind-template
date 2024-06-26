import { useTheme } from '~/hooks/useTheme'
import { THEME } from '~/constants'

export const DarkModeButton = () => {
  const { value, toggle } = useTheme()

  const handleToggle = () => {
    toggle()
  }

  return (
    <button 
      type='button'
      className='order-3 p-2 rounded-full text-purple-900 hover:bg-purple-100 focus:ring-1 focus:ring-purple-200 dark:text-purple-200 dark:hover:bg-slate-700'
      onClick={ handleToggle }
    >
      {value === THEME.DARK 
        ? (
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            fill='currentColor' 
            viewBox='0 0 24 24' 
            stroke='currentColor' 
            className='h-5 w-5'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z' />
          </svg>
        )
        : (
          <svg 
            xmlns='http://www.w3.org/2000/svg' 
            viewBox='0 0 24 24' 
            fill='currentColor'
            className='h-5 w-5'
          >
            <path fillRule='evenodd' d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z' clipRule='evenodd' />
          </svg>
        )
      }
    </button>
  )
}
