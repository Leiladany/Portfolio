import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const aboutElement = document.getElementById("about-section");
      const projectsElement = document.getElementById("projects-section");
      const journeyElement = document.getElementById("journey-section");
      const SocialMediaElement = document.getElementById(
        "social-media-section"
      );

      const aboutOffset = aboutElement ? aboutElement.offsetTop : 0;
      const projectsOffset = projectsElement ? projectsElement.offsetTop : 0;
      const journeyOffset = journeyElement ? journeyElement.offsetTop : 0;
      const SocialMediaOffset = SocialMediaElement
        ? SocialMediaElement.offsetTop
        : 0;

      if (scrollPosition >= aboutOffset && scrollPosition < projectsOffset) {
        setActiveSection("about-section");
      } else if (
        scrollPosition >= projectsOffset &&
        scrollPosition < journeyOffset
      ) {
        setActiveSection("projects-section");
      } else if (
        scrollPosition >= journeyOffset &&
        scrollPosition < SocialMediaOffset
      ) {
        setActiveSection("certifications-section");
      } else if (scrollPosition >= SocialMediaOffset) {
        setActiveSection("social-media-section");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollProps = {
    spy: true,
    smooth: true,
    offset: 0,
    duration: 500,
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-menu">
          <i className="fas fa-bars"></i>
        </div>

        <ul className="nav-menu">
          <li
            className={`nav-item ${
              activeSection === "about-section" ? "active" : ""
            }`}
          >
            <ScrollLink to="about-section" {...scrollProps}>
              About
            </ScrollLink>
          </li>
          <li
            className={`nav-item ${
              activeSection === "projects-section" ? "active" : ""
            }`}
          >
            <ScrollLink to="projects-section" {...scrollProps}>
              Projects
            </ScrollLink>
          </li>
          <li
            className={`nav-item ${
              activeSection === "journey-section" ? "active" : ""
            }`}
          >
            <ScrollLink to="journey-section" {...scrollProps}>
              Journey
            </ScrollLink>
          </li>
          <li
            className={`nav-item ${
              activeSection === "social-media-section" ? "active" : ""
            }`}
          >
            <ScrollLink to="social-media-section" {...scrollProps}>
              Get In Touch
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
