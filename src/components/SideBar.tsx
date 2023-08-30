import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../assets/react.svg'
import { routes } from '../router/routes'

export default function SideBar() {
  return (
    <div className='main-layout'>
      <nav>
        <img className='logo' src={Logo} alt='logo' />
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink
                className={({ isActive }) => (isActive ? '' : 'nav-active')}
                to={route.path}
              >
                {route.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
