import { MdAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import "./Socialmedia.css";

const SocialMedia = () => {
  const emailAddress = "leiladany16@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/leila-teixeira";
  const githubURL = "https://github.com/";

  return (
    <div>
      <div className="bigBox SocialMedia" id="social-media-section">
        <div className="SocialMedia" id="social-media-section">
          <h1>Social Media</h1>
          <div className="button-container">
            <button className="social-button">
              <a href={`mailto:${emailAddress}`} className="button-socialmedia">
                <MdAlternateEmail size={150} color="white"/>
              </a>
            </button>
            <button className="social-button">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-socialmedia"
              >
                <CiLinkedin size={150} color="white" />
              </a>
            </button>
            <button className="social-button">
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-socialmedia"
              >
                <FaGithubSquare size={150} color="white" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
