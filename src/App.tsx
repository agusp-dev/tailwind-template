import { Toolbar } from '~/components/Toolbar'
import { ArticleList } from '~/components/ArticleList'
import { Footer } from '~/components/Footer'

function App () {
  return (
    <div className='h-full flex flex-col gap-4'>
      <Toolbar />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default App
