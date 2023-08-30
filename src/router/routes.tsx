interface Route {
  path: string
  element: JSX.Element
  title: string
}

export const routes: Route[] = [
  {
    path: '/',
    element: <h1>Home</h1>,
    title: 'Home',
  },
  {
    path: '/about',
    element: <h1>About</h1>,
    title: 'About',
  },
]
