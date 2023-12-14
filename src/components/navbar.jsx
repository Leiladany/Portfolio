import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
  
      const myServicesOffset = document.getElementById("my-services-section").offsetTop;
      const projectsOffset = document.getElementById("projects-section").offsetTop;
      const certificationsOffset = document.getElementById("certifications-section").offsetTop;
      const getInTouchOffset = document.getElementById("get-in-touch-section").offsetTop;
  
      if (scrollPosition >= myServicesOffset && scrollPosition < projectsOffset) {
        setActiveSection("my-services-section");
      } else if (scrollPosition >= projectsOffset && scrollPosition < certificationsOffset) {
        setActiveSection("projects-section");
      } else if (scrollPosition >= certificationsOffset && scrollPosition < getInTouchOffset) {
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

  const getNavbarColor = () => {
    switch (activeSection) {
      case "my-services-section":
        return "#dfc9ff";
      case "projects-section":
        return "#e8dff5";
      case "certifications-section":
        return "#dfc9ff";
      case "get-in-touch-section":
        return "#e8dff5";
      default:
        return "#dfc9ff";
    }
  };

  return (
    <nav className="navbar" style={{ backgroundColor: getNavbarColor() }}>
      <div className="navbar-container">
        <div className="nav-menu">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="nav-menu">
          <li className={`nav-item ${activeSection === "my-services-section" ? "active" : ""}`}>
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
          <li className={`nav-item ${activeSection === "projects-section" ? "active" : ""}`}>
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
          <li className={`nav-item ${activeSection === "certifications-section" ? "active" : ""}`}>
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
          <li className={`nav-item ${activeSection === "get-in-touch-section" ? "active" : ""}`}>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;