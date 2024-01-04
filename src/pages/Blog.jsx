import { useEffect } from "react";
import blogimg1 from "../assets/Images/blog-img1.png"

const Blog = () => {
  useEffect(() => {
    document.body.classList.add("game-page");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("game-page");
    };
  }, []);

  return (
    <div className="game-container">
      <div className="game">
        <img src={blogimg1} alt="Online Agenda" />
        <div className="game-info">
          <h3>Empowered</h3>
          <p>
            Embark on a journey with "Empowered," an online platform designed to
            enlighten individuals about sexuality, health, and relationships.{" "}
            <br></br>
            <br></br>This dynamic space integrates{" "}
            <strong>
              <span class="rainbow-text">React.Js</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">JavaScript (ES6)</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">MongoDB</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">Express.Js</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">Node.Js</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">Axios</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">JWT</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">Mantine</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">HTML</span>
            </strong>
            ,{" "}
            <strong>
              <span class="rainbow-text">CSS</span>
            </strong>
            , and is hosted on{" "}
            <strong>
              <span class="rainbow-text">Netlify</span>
            </strong>
            . <br></br> <br></br>Explore a wealth of information and empower
            yourself with insights on crucial aspects of life.
          </p>
        </div>
      </div>
      <div className="try-me-container">
        <a
          href="https://feel-empowered.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="try-me-button"
        >
          Try Me
        </a>
      </div>
    </div>
  );
};

export default Blog;