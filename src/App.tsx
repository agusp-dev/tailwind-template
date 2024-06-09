import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '~/pages/Home'
import { News } from '~/pages/News'
import { AboutUs } from '~/pages/AboutUs'
import { HOME, NEWS, ABOUT_US } from '~/routes'
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
        element: <News />
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
