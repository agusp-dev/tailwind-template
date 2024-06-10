import type { Article, ArticleId } from '~/types'
import { ArticleAvatar } from '~/components/ArticleAvatar'

type Props = {
  article: Article,
  onHandleClick: (id: ArticleId) => void
}

export const ArticleItem: React.FC<Props> = ({
  article,
  onHandleClick,
}) => {
  const { id, title, img, category, description, author, date } = article
  const handleClick = () => {
    onHandleClick(id)
  }
  return (
    <article
      className='overflow-hidden h-full w-fit bg-white dark:bg-slate-700 shadow-md rounded flex flex-col hover:cursor-pointer border border-slate-100 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 [&>img]:hover:scale-105'
      onClick={ handleClick }
    >
      <img
        className='h-52 w-full object-cover object-center rounded-t transition ease-in-out duration-300' 
        src={ img } 
        alt={ title } 
      />
      <div className='h-full flex flex-col py-4 px-4 gap-12'>
        <div className='flex-1 flex flex-col gap-3'>
          <strong className='text-xs text-purple-500 dark:text-purple-300'>{ category }</strong>
          <h3 className='text-lg text-slate-700 dark:text-slate-200 leading-6 font-semibold'>{ title }</h3>
          <p className='text-sm font-light text-slate-500 dark:text-slate-200'>{ description }</p>
        </div>
        <div className='flex justify-start gap-2 items-center'>
          <ArticleAvatar articleAuthor={ author } />
          <div className='flex flex-col'>
            <small className='text-slate-700 dark:text-slate-300 font-semibold text-xs'>{ author }</small>
            <small className='font-light text-slate-500 dark:text-slate-300 text-xs'>{ date }</small>
          </div>
        </div>
      </div>
    </article>
  )
}
