import { useParams } from 'react-router-dom'
import { articles } from '~/mock/articles'
import { ArticleId, Article, ArticleAuthor } from '~/types'
import { ArticleAvatar } from '~/components/ArticleAvatar'

type SelectedArticle = Article | undefined

const getSelectedArticle = (id: ArticleId): SelectedArticle =>
  articles?.find(article => article?.id === id)

export const ArticleDetails: React.FC = () => {
  const { articleId } = useParams()
  
  const selectedArticle: SelectedArticle = getSelectedArticle(articleId as ArticleId)

  return (
    <div className='h-full max-w-3xl mx-auto px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center gap-8'>
      <img
        className='w-full h-40 object-cover object-center rounded' 
        src={ selectedArticle?.img } 
        alt={ selectedArticle?.id } 
      />
      <div className='px-2 sm:px-6'>
        <h2 className='text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100'>{ selectedArticle?.title }</h2>
        <div className='w-fit mt-4 bg-purple-500 text-slate-100 text-sm px-3 py-1 rounded-full'>
          { selectedArticle?.category }
        </div>
        <p className='text-md pt-4 text-slate-900 dark:text-slate-200'>{ selectedArticle?.longText }</p>
        <div className='pt-4 mt-4 flex justify-center sm:justify-end gap-2 items-center border-t border-purple-400'>
          <ArticleAvatar articleAuthor={ selectedArticle?.author as ArticleAuthor } />
          <div className='flex flex-col'>
            <small className='text-slate-700 dark:text-slate-300 font-semibold text-xs'>{ selectedArticle?.author }</small>
            <small className='font-light text-slate-500 dark:text-slate-300 text-xs'>{ selectedArticle?.date }</small>
          </div>
        </div>
      </div>
    </div>
  )
}
