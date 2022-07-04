import { Link } from 'react-router-dom';
const SideNav = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="bi bi-person-circle"></i>
              Profile
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-people"></i>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/devices">
              <i className="bi bi-phone"></i>
              Devices
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default SideNav;