import { DarkModeButton } from '~/components/DarkModeButton'
import { HeaderNav } from '~/components/HeaderNav'
import { Brand } from '~/components/Brand'

export const Toolbar = () => {
  return (
    <header className='bg-white dark:bg-slate-800 px-6 shadow'>
      <div className='h-16 max-w-6xl flex justify-between items-center mx-auto'>
        <Brand />
        <HeaderNav />
        <DarkModeButton />
      </div>
    </header>
  )
}
