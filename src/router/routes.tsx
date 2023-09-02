import ShoppingPage from '../02-components-patterns/pages/ShoppingPage'

interface Route {
  path: string
  element: JSX.Element
  title: string
}

export const routes: Route[] = [
  {
    path: '/',
    element: <ShoppingPage />,
    title: 'LazyPage1',
  },
  {
    path: '/page2',
    element: <h2>Página 2</h2>,
    title: 'Page 2',
  },
  {
    path: '/page3',
    element: <h2>Página 3</h2>,
    title: 'Page 3',
  },
]
