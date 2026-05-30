import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'Navigation-login active-link' : 'Navigation-login'
            }
          >
            Log In
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? 'Navigation-signup active-link' : 'Navigation-signup'
            }
          >
            Sign Up
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
