import { useState } from "react";
import { Link } from "react-router-dom";
import webdevicon1 from "../assets/Images/wdeicon.png";
import wdicon1 from "../assets/Images/wdicon.png";
import veicon1 from "../assets/Images/veicon.png";
import gamesicon1 from "../assets/Images/gameicon.png";
import onagicon1 from "../assets/Images/onagnicon.png";
import blogicon1 from "../assets/Images/blogicon.png";
import emailicon1 from "../assets/Images/emailicon.png";
import linkicon1 from "../assets/Images/linkedinicon.png";
import ldsicon1 from "../assets/Images/LSD.png";
import ironhicon1 from "../assets/Images/ironhackicon.png";



const Homepage = () => {
  const emailAddress = "leiladany16@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/leila-teixeira";

  const certifications = [
    {
      name: "Lisbon School of Design",
      image: ldsicon1,
      alt: "LSD",
      modalImage: "/Images/LSDCert.png",
    },
    {
      name: "Ironhack",
      image: ironhicon1,
      alt: "Ironhack",
      modalImage: "/Images/ironhackCert.png",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(0);

  const openCertification = (index) => {
    setSelectedCertification(index);
    setShowModal(true);
  };

  const closeCertification = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="bigBox MyServices" id="my-services-section">
        <div className="MyServices" id="my-services-section">
          <h1>My Services</h1>
          <div className="button-container">
            <section>
              <img src={webdevicon1} alt="Web Development" />
              <p>Web Development</p>
            </section>
            <section>
              <img src={wdicon1} alt="Web Design" />
              <p>Web Design</p>
            </section>
            <section>
              <img src={veicon1} alt="Video Editing" />
              <p>Video Editing</p>
            </section>
          </div>
        </div>
      </div>
      <div className="bigBox Projects" id="projects-section1">
        <div className="Projects" id="projects-section">
          <h1>Projects</h1>
          <div className="button-container">
            <button>
              <Link to="/games" className="button-projects">
                <img src={gamesicon1} alt="Games" />
                <p>Game</p>
              </Link>
            </button>
            <button>
              <Link to="/onlineagenda" className="button-projects">
                <img src={onagicon1} alt="OnlineAgenda" />
                <p>Online Agenda</p>
              </Link>
            </button>
            <button>
              <Link to="/blog" className="button-projects">
                <img src={blogicon1} alt="Blog" />
                <p>Blog</p>
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="bigBox Certifications" id="certifications-section">
        <div className="Certifications" id="certifications-section">
          <h1>Certifications</h1>
          <div className="button-container">
            {certifications.map((certification, index) => (
              <button key={index} onClick={() => openCertification(index)}>
                <img src={certification.image} alt={certification.alt} />
                <p>{certification.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal-overlay"
          onClick={(e) =>
            e.target.classList.contains("close-button") && closeCertification()
          }
        >
          <div className="modal">
            {/* Close button */}
            <button
              className="close-button"
              onClick={(e) => e.stopPropagation() || closeCertification()}
            >
              &times;
            </button>
            {/* Certification content */}
            <div className="certification-content">
              <h2>{certifications[selectedCertification].name}</h2>
              <img
                src={certifications[selectedCertification].modalImage}
                alt={certifications[selectedCertification].alt}
              />
            </div>
          </div>
        </div>
      )}

      <div className="bigBox GetinTouch" id="get-in-touch-section">
        <div className="GetinTouch" id="get-in-touch-section">
          <h1>Get in Touch</h1>
          <div className="button-container">
            <button>
              <a href={`mailto:${emailAddress}`} className="button-getintouch">
                <img src={emailicon1} alt="Email" />
                <p>Email</p>
              </a>
            </button>
            <button>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-getintouch"
              >
                <img src={linkicon1} alt="Linkedin" />
                <p>LinkedIn</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;