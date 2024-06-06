import { ArticleItem } from '~/components/ArticleItem'
import { articles } from '~/mock/articles'

export const ArticleList = () => {
  return (
    <div className='h-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center
    py-8 px-6 sm:px-24 md:px-6 outline-offset-2'>
      {articles?.map(article => (
        <ArticleItem 
          key={article?.id} 
          { ...article } 
        />
      ))}
    </div>
  )
}
