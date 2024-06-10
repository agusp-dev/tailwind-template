import { Link } from 'react-router-dom'
import type { NavItem as NavItemType } from '~/types'

export const NavItem: React.FC<NavItemType> = ({ title, url }) => {
  return (
    <li className='font-medium text-md text-purple-700 hover:text-purple-800 dark:text-purple-200 dark:hover:text-purple-300'>
      <Link to={ url }>
        { title }
      </Link>
    </li>
  )
}
