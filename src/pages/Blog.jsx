import React from "react";

const Blog = () => {
  return (
    <div className="game-container">
      <div className="game">
        <img src="/public/Images/blog-img1.png" alt="Online Agenda" />
        <div className="game-info">
          <h3>Empowered</h3>
          <p>
          Embark on a journey with "Empowered," an online platform designed to enlighten individuals about sexuality, health, and relationships. <br></br><br></br>This dynamic space integrates <strong>React.Js</strong>, <strong>JavaScript (ES6)</strong>, <strong>MongoDB</strong>, <strong>Express.Js</strong>, <strong>Node.Js</strong>, <strong>Axios</strong>, <strong>JWT</strong>, <strong>Mantine</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and is hosted on <strong>Netlify</strong>. <br></br> <br></br>Explore a wealth of information and empower yourself with insights on crucial aspects of life.
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