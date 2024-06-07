import { navItems } from '~/mock/navItems'
import { NavItem } from '~/components/NavItem'

export const HeaderNav = () => {
  return (
    <nav className='flex gap-6'>
      {navItems?.map(({ title, url }) => (
        <NavItem 
          key={ title }
          title={ title }
          url={ url } 
        />
      ))}
    </nav>
  )
}
