type Props = {
  title: string,
  onHandleClick: () => void
}

export const HeroCtaButton: React.FC<Props> = ({ 
  title,
  onHandleClick,
}) => {
  return (
    <button 
      className='
        py-3
        px-6
        rounded
        bg-purple-600 
        text-sm
        font-semibold 
        text-white 
        shadow
        hover:bg-purple-700
        focus:ring-2
        focus:ring-purple-400
      '
      onClick={ onHandleClick }
    >
      { title }
    </button>
  )
}
