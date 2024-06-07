// import { MenuButton } from '~/components/MenuButton'
import { DarkModeButton } from '~/components/DarkModeButton'
import { UserButton } from '~/components/UserButon'
import { HeaderNav } from '~/components/HeaderNav'
import { Brand } from '~/components/Brand'

export const Toolbar = () => {
  return (
    <header className='bg-white px-6 shadow'>
      <div className='h-16 max-w-6xl flex justify-between items-center mx-auto'>
        <Brand />
        <HeaderNav />
        {/* <strong className='text-xl text-purple-700'>Tailwind Template</strong> */}
        <div className='flex items-center gap-1'>
          <DarkModeButton />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
