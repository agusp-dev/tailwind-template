
export type ArticleId = string
export type ArticleAuthor = string

export interface Article {
  id: ArticleId
  img: string
  category: string
  title: string
  description: string
  longText: string
  author: ArticleAuthor
  date: string
}

type NavItem = {
  title: string
  url: string
}

type Route = {
  path: string
  element: JSX.Element
  children?: Array<Route>
}

export interface TeamMember {
  name: string
  role: string
  profileImg: string
}

type THEME = 'light' | 'dark'
