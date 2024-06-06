import type { ArticleAuthor } from '~/types'

type Props = {
  articleAuthor: ArticleAuthor
}

export const ArticleAvatar: React.FC<Props> = ({ 
  articleAuthor
}) => {
  const joinNameAndSurname = articleAuthor.replace(' ', '+')
  const avatarUrl = `https://ui-avatars.com/api?name=${joinNameAndSurname}`
  return (
    <img
      className='w-9 h-9 rounded-full' 
      src={ avatarUrl } 
      alt={ articleAuthor } 
    />
  )
}
