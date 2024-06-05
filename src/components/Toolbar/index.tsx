import { MenuButton } from '~/components/MenuButton'
import { DarkModeButton } from '~/components/DarkModeButton'
import { UserButton } from '~/components/UserButon'

export const Toolbar = () => {
  return (
    <header className='h-16 bg-white flex justify-between items-center px-6 shadow'>
      <MenuButton />
      <strong className='text-xl text-purple-500'>Tailwind Template</strong>
      <div className='flex items-center gap-1'>
        <DarkModeButton />
        <UserButton />
      </div>
    </header>
  )
}
