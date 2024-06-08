import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '~/pages/Home'
import { News } from '~/pages/News'
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
        element: <h1>About</h1>
      }
    ]
  }
]

const router = createBrowserRouter(routes)

function App () {
  return <RouterProvider router={ router } />
}

export default App
