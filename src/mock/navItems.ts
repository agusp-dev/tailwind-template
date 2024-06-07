import { HOME, NEWS, ABOUT_US } from '~/routes'
import type { NavItem } from '~/types'

export const navItems: Array<NavItem> = [{
  title: 'Home',
  url: HOME
}, {
  title: 'New\'s',
  url: NEWS
}, {
  title: 'About Us',
  url: ABOUT_US
}]
