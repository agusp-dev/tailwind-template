import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '~/pages/Home'
import { News } from '~/pages/News'
import { ArticleDetails } from '~/pages/ArticleDetails'
import { AboutUs } from '~/pages/AboutUs'
import { HOME, NEWS, ABOUT_US, SELECTED_ARTICLE } from '~/routes'
import { RootLayout } from '~/layouts/RootLayout'
import { Route } from '~/types'

const routes: Array<Route> = [
  {
    path: HOME,
    element: <RootLayout />,
    children: [
      {
        path: HOME,
        element: <Home />
      },
      {
        path: NEWS,
        element: <News />,
      },
      {
        path: SELECTED_ARTICLE,
        element: <ArticleDetails />
      },
      {
        path: ABOUT_US,
        element: <AboutUs />
      }
    ]
  }
]

const router = createBrowserRouter(routes)

function App () {
  return <RouterProvider router={ router } />
}

export default App
