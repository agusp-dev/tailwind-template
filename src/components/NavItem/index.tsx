import type { NavItem as NavItemType } from '~/types'

export const NavItem: React.FC<NavItemType> = ({ title, url }) => {
  return (
    <a
      className='font-medium text-md text-purple-700 hover:text-purple-800' 
      href={ url }
    >
      { title }
    </a>
  )
}
