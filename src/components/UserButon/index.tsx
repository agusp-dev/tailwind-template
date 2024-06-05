export const UserButton = () => {
  return (
    <button 
      type='button'
      className='
        p-1
        rounded-full
      bg-slate-100
        focus:ring-1
      focus:ring-slate-200
      '
    >
      <img
        width={24}
        height={24} 
        src='https://avatar.iran.liara.run/public/15' 
        alt='User' 
      />
    </button>
  )
}
