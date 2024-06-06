import { ArticleItem } from '~/components/ArticleItem'
import { articles } from '~/mock/articles'

export const ArticleList = () => {
  return (
    <main className='h-full p-4 max-w-6xl mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles?.map(article => (
          <ArticleItem 
            key={article?.id} 
            { ...article } 
          />
        ))}
      </div>
    </main>
  )
}
