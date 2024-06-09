import { Toolbar } from '~/components/Toolbar'
import { Footer } from '~/components/Footer'
import { PageContainer } from '~/layouts/PageContainer'
import { Outlet } from 'react-router-dom'

export const RootLayout = () => (
  <div className='h-screen flex flex-col'>
    <Toolbar />
    <PageContainer>
      <Outlet />
    </PageContainer>
    <Footer />
  </div>
)
