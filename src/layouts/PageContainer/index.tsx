type Props = {
  children: JSX.Element
}

export const PageContainer: React.FC<Props> = ({ children }) => (
  <div className='flex-1 z-10 bg-slate-100 dark:bg-slate-800'>
    <div
      className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
      aria-hidden='true'
    >
      <div          
        className='
          relative 
          z-20 
          left-[calc(50%-11rem)] 
          aspect-[1155/678] 
          w-[36.125rem] 
          -translate-x-1/2 
          rotate-[30deg] 
          bg-gradient-to-tr from-[#da86a9] dark:from-[#794a5e] to-[#9089fc] dark:to-[#635ead] 
          opacity-30 
          sm:left-[calc(50%-30rem)] 
          sm:w-[72.1875rem]
        '
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <main className='h-full w-full'>
      { children }
    </main>
  </div>
)
