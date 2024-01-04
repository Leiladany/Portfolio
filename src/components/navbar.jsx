import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const myServicesElement = document.getElementById("my-services-section");
      const projectsElement = document.getElementById("projects-section");
      const certificationsElement = document.getElementById(
        "certifications-section"
      );
      const getInTouchElement = document.getElementById("get-in-touch-section");

      const myServicesOffset = myServicesElement
        ? myServicesElement.offsetTop
        : 0;
      const projectsOffset = projectsElement ? projectsElement.offsetTop : 0;
      const certificationsOffset = certificationsElement
        ? certificationsElement.offsetTop
        : 0;
      const getInTouchOffset = getInTouchElement
        ? getInTouchElement.offsetTop
        : 0;

      if (
        scrollPosition >= myServicesOffset &&
        scrollPosition < projectsOffset
      ) {
        setActiveSection("my-services-section");
      } else if (
        scrollPosition >= projectsOffset &&
        scrollPosition < certificationsOffset
      ) {
        setActiveSection("projects-section");
      } else if (
        scrollPosition >= certificationsOffset &&
        scrollPosition < getInTouchOffset
      ) {
        setActiveSection("certifications-section");
      } else if (scrollPosition >= getInTouchOffset) {
        setActiveSection("get-in-touch-section");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(document.getElementById(sectionId).offsetTop, {
      duration: 500,
      delay: -100,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-menu">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="nav-menu">
          {location.pathname === "/games" ||
          location.pathname === "/onlineagenda" ||
          location.pathname === "/blog" ? (
            <li className="nav-item">
              <RouterLink to="/homepage">Go back to Homepage</RouterLink>
            </li>
          ) : (
            <>
              <li
                className={`nav-item ${
                  activeSection === "my-services-section" ? "active" : ""
                }`}
              >
                <ScrollLink
                  to="my-services-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  My Services
                </ScrollLink>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "projects-section" ? "active" : ""
                }`}
              >
                <ScrollLink
                  to="projects-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Projects
                </ScrollLink>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "certifications-section" ? "active" : ""
                }`}
              >
                <ScrollLink
                  to="certifications-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Certifications
                </ScrollLink>
              </li>
              <li
                className={`nav-item ${
                  activeSection === "get-in-touch-section" ? "active" : ""
                }`}
              >
                <ScrollLink
                  to="get-in-touch-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Get In Touch
                </ScrollLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;