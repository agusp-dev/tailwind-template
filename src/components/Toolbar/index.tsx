import { MenuButton } from '~/components/MenuButton'
import { DarkModeButton } from '~/components/DarkModeButton'
import { UserButton } from '~/components/UserButon'

export const Toolbar = () => {
  return (
    <header className='bg-white px-6 shadow'>
      <div className='h-16 max-w-6xl flex justify-between items-center mx-auto'>
        <MenuButton />
        <strong className='text-xl text-purple-700'>Tailwind Template</strong>
        <div className='flex items-center gap-1'>
          <DarkModeButton />
          <UserButton />
        </div>
      </div>
    </header>
  )
}
