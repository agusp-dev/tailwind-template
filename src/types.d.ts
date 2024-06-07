
export type ArticleAuthor = string

export interface Article {
  id: string
  img: string
  category: string
  title: string
  description: string
  author: ArticleAuthor
  date: string
}

type NavItem = {
  title: string
  url: string
}
