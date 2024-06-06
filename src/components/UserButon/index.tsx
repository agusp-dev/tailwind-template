export const UserButton = () => {
  return (
    <button 
      type='button'
      className='
        rounded-full
        hover:shadow
        focus:ring-2
      focus:ring-slate-100
      '
    >
      <img
        className='h-8 w-8 rounded-full'
        src='https://ui-avatars.com/api?name=a+p' 
        alt='User' 
      />
    </button>
  )
}
