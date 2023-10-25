import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

const Routes = () => <RouterProvider router={router}/>

export { Routes };