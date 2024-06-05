import { Toolbar } from '~/components/Toolbar'
import { ArticleList } from '~/components/ArticleList'
import { Footer } from '~/components/Footer'

function App () {
  return (
    <div className='h-screen flex flex-col'>
      <Toolbar />
      <ArticleList />
      <Footer />
    </div>
  )
}

export default App
