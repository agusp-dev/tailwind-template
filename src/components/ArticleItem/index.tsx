import type { Article } from '~/types'
import { ArticleAvatar } from '~/components/ArticleAvatar'

export const ArticleItem: React.FC<Article> = ({
  title, 
  img,
  category, 
  description, 
  author, 
  date 
}) => {
  return (
    <article className='h-full w-fit bg-white shadow-md rounded flex flex-col'>
      <img
        className='h-52 w-full object-cover object-center rounded-t' 
        src={ img } 
        alt={ title } 
      />
      <div className='h-full flex flex-col py-4 px-4 gap-12'>
        <div className='flex-1 flex flex-col gap-3'>
          <strong className='text-xs text-purple-500'>{ category }</strong>
          <h3 className='text-lg text-slate-700 leading-6 font-semibold'>{ title }</h3>
          <p className='text-sm font-light text-slate-500'>{ description }</p>
        </div>
        <div className='flex justify-start gap-2 items-center'>
          <ArticleAvatar articleAuthor={ author } />
          <div className='flex flex-col'>
            <small className='text-slate-700 font-semibold text-xs'>{ author }</small>
            <small className='font-light text-slate-500 text-xs'>{ date }</small>
          </div>
        </div>
      </div>
    </article>
  )
}
