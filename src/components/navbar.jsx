import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-menu">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <ScrollLink
              to="my-services-section"
              spy={true}
              smooth={true}
              offset={-230}
              duration={500}
            >
              My Services
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
            >
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="certifications-section"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
            >
              Certifications
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink
              to="get-in-touch-section"
              spy={true}
              smooth={true}
              offset={-210}
              duration={500}
            >
              Get In Touch
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
