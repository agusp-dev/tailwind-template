import { useNavigate } from 'react-router-dom'
import { HeroCtaButton } from '~/components/HeroCtaButton'
import { NEWS } from '~/routes'

export const Home = () => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(NEWS)
  }

  return (
    <div className='h-full max-w-3xl mx-auto px-8 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-4xl md:text-6xl text-center font-bold text-slate-800 dark:text-slate-100'>
        Stay Updated with the Latest in Programming
      </h1>
      <p className='text-lg text-center font-normal text-slate-500 dark:text-slate-400'>
        Stay ahead of the curve with instant updates on the newest programming trends, 
        tools, and releases. Empower your coding journey with expert insights and stay connected 
        with the pulse of the developer community
      </p>
      <HeroCtaButton 
        title='Go to the News'
        onHandleClick={ handleNavigate }
      />
    </div>
  )
}
