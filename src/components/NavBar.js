// import Reacr from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => (
  <nav className="p-2 navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">ЗАПРОСЫ</div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">
          Users
        </NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink to="/profile:id" className="nav-link">
          Profile
        </NavLink>
      </li> */}
    </ul>
  </nav>
)
