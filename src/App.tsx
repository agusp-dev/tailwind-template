import { Toolbar } from '~/components/Toolbar'
import { ArticleList } from '~/components/ArticleList'
import { Footer } from '~/components/Footer'
import { Home } from '~/pages/Home'
import { PageContainer } from '~/layouts/PageContainer'

function App () {
  return (
    <div className='h-screen flex flex-col'>
      <Toolbar />
      <PageContainer>
        {/* <Home /> */}
        <ArticleList />
      </PageContainer>
      <Footer />
    </div>
  )
}

export default App
