import { Link } from 'react-router-dom';

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className={`nav-menu`}>
          <i className="fas fa-bars"></i>
        </div>

        <ul className={`nav-menu`}>
          <li className="nav-item">
            <Link to="/homepage" className="nav-links" >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" >
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" >
              Get In Touch
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;