import { Disclosure, DisclosurePanel, DisclosureButton } from '@headlessui/react'
import { navItems } from '~/mock/navItems'
import { NavItem } from '~/components/NavItem'
import { Link } from 'react-router-dom'

const DesktopNav = () => (
  <ul className='hidden sm:order-2 sm:flex gap-6'>
    {navItems?.map(({ title, url }) => (
      <NavItem 
        key={ title }
        title={ title }
        url={ url } 
      />
    ))}
  </ul>
)

const MobileNav = () => (
  <Disclosure as='nav' className='sm:hidden sm:order-2'>
    <DisclosureButton className='sm:hidden rounded-md p-1.5 text-purple-900 hover:bg-purple-100 focus:ring-1 focus:ring-purple-200 dark:text-purple-200 dark:hover:bg-slate-700'>
      <svg 
        className='h-6 w-6' 
        fill='none' 
        viewBox='0 0 24 24' 
        strokeWidth='1.5' 
        stroke='currentColor' 
        aria-hidden='true'
      >
        <path 
          strokeLinecap='round' 
          strokeLinejoin='round' 
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' 
        />
      </svg>
    </DisclosureButton>
    <DisclosurePanel className='absolute top-14 left-0 w-full px-4'>
      <ul className='sm:hidden rounded bg-purple-100 dark:bg-slate-700 shadow flex flex-col space-y-1 px-2 pb-3 pt-2'>
        {navItems?.map(({ title, url }) => (
          <DisclosureButton
            className='p-1 rounded text-purple-900 hover:bg-purple-200 dark:text-purple-200 dark:hover:bg-slate-600'
            as={ Link }
            key={ title }
            to={ url }
          >
            { title }
          </DisclosureButton>
        ))}
      </ul>
    </DisclosurePanel>
  </Disclosure>
)

export const HeaderNav = () => (
  <>
    <DesktopNav />
    <MobileNav />
  </>
)
