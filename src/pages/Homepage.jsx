import { useState } from "react";
import { Link } from "react-router-dom";



const Homepage = () => {
  const emailAddress = "leiladany16@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/leila-teixeira";

  const certifications = [
    {
      name: "Lisbon School of Design",
      image: "/Images/LSD.png",
      alt: "LSD",
      modalImage: "/Images/LSDCert.png",
    },
    {
      name: "Ironhack",
      image: "/Images/ironhackicon.png",
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

  const switchCertificationImage = () => {
    setSelectedCertification(
      (prevIndex) => (prevIndex + 1) % certifications.length
    );
  };

  return (
    <div>
      <div className="bigBox">
        <div className="MyServices" id="my-services-section">
          <h1>My Services</h1>
          <div className="button-container">
            <section>
              <img src="/Images/wdicon.png" alt="Web Development" />
              <p>Web Development</p>
            </section>
            <section>
              <img src="/Images/wdeicon.png" alt="Web Design" />
              <p>Web Design</p>
            </section>
            <section>
              <img src="/Images/veicon.png" alt="Video Editing" />
              <p>Video Editing</p>
            </section>
          </div>
        </div>
      </div>
      <div className="bigBox">
      <div className="Projects" id="projects-section">
      <h1>Projects</h1>
  <div className="button-container">
  <button className="hover-button">
  <Link to="/games" className="button-projects">
    <img src="/Images/gameicon.png" alt="Games" />
    <p>Games</p>
  </Link>
</button>
<button>
  <Link to="/games" className="button-projects">
    <img src="/Images/onagnicon.png" alt="OnlineAgenda" />
    <p>Online Agenda</p>
  </Link>
</button>
<button>
  <Link to="/games" className="button-projects">
    <img src="/Images/blogicon.png" alt="Blog" />
    <p>Blog</p>
  </Link>
</button>
  </div>
</div>
      </div>
      <div className="bigBox">
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
        <div className="modal-overlay" onClick={closeCertification}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button className="close-button" onClick={closeCertification}>
              &times;
            </button>
            {/* Certification content */}
            <h2>{certifications[selectedCertification].name}</h2>
            <img
              src={certifications[selectedCertification].modalImage}
              alt={certifications[selectedCertification].alt}
            />
            {/* Switch image button */}
            <button
              className="switch-button"
              onClick={switchCertificationImage}
            >
              Switch Image
            </button>
          </div>
        </div>
      )}

      <div className="bigBox">
        <div className="GetinTouch" id="get-in-touch-section">
          <h1>Get in Touch</h1>
          <div className="button-container">
          <button>
            <a href={`mailto:${emailAddress}`} className="button-getintouch">
              
                <img src="/Images/emailicon.png" alt="Email" />
                <p>Email</p>
            </a>
            </button>
            <button>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="button-getintouch">
              
                <img src="/Images/linkedinicon.png" alt="Linkedin" />
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
