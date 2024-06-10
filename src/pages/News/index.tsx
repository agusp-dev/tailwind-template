import { useNavigate } from 'react-router-dom'
import { ArticleItem } from '~/components/ArticleItem'
import { articles } from '~/mock/articles'
import { NEWS } from '~/routes'
import { ArticleId } from '~/types'

export const News = () => {
  const navigate = useNavigate()
  const handleArticleSelected = (id: ArticleId) => {
    navigate(`${NEWS}/${id}`)
  }
  return (
    <div className='h-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center
    py-8 px-6 sm:px-24 md:px-6 outline-offset-2'>
      {articles?.map(article => (
        <ArticleItem 
          key={article?.id} 
          article={ article }
          onHandleClick={ handleArticleSelected }
        />
      ))}
    </div>
  )
}
