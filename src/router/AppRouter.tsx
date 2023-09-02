import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import SideBar from '../components/SideBar'
import { routes } from './routes'

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SideBar />,
      children: [
        ...routes,
        { path: '/', element: <Navigate to='/' replace /> },
      ],
      errorElement: <Navigate to='/' replace />,
    },
  ])

  return <RouterProvider router={router} />
}
