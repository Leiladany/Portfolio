/* eslint-disable react/no-unescaped-entities */
import "./Projects.css";
import EscapingWestview from "../../assets/Images/Escaping-Westview.png";
import PawsitivePets from "../../assets/Images/Pawsitive.png";
import Empowered from "../../assets/Images/Empowered.png";
import Portfolio from "../../assets/Images/Coding-Leila.png";

const Projects = () => {
  return (
    <div className="bigBox Projects" id="projects-section1">
      <div className="Projects" id="projects-section">
        <h1>Projects</h1>
        <div className="teste">
          <div className="Project-box">
            <img
              className="Project-cover"
              src={EscapingWestview}
              alt="Escaping Westview Project"
            />
            <div className="Project-title">Escaping Westview</div>
            <div className="Project-desc">
              A 2D game inspired by the Disney+ series 'WandaVision,' where the
              objective is to evade spells for as long as possible.
            </div>
            <div className="Project-lang">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Canvas</li>
              </ul>
            </div>
            <div className="Project-buttons">
              <a href="https://leiladany.github.io/Escaping-Westview/" target="_blank" rel="noopener noreferrer" className="Project-button">Check out</a>
            </div>
          </div>
          <div className="Project-box">
            <img
              className="Project-cover"
              src={PawsitivePets}
              alt="Pawsitive Pets"
            />
            <div className="Project-title">Pawsitive Pets</div>
            <div className="Project-desc">
              A website designed for storing your pet's information
              conveniently.
            </div>
            <div className="Project-lang">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Json.API</li>
              </ul>
            </div>
            <div className="Project-buttons">
              <a href="https://pawsitive-pets.adaptable.app/" target="_blank" rel="noopener noreferrer" className="Project-button">Check out</a>
            </div>
          </div>
          <div className="Project-box">
            <img
              className="Project-cover"
              src={Empowered}
              alt="Empowered Project"
            />
            <div className="Project-title">Empowered</div>
            <div className="Project-desc">
              Empowered is an innovative online platform dedicated to educating
              both young people and adults on vital topics surrounding
              sexuality, health, and relationships.
            </div>
            <div className="Project-lang">
              <ul className="Empowered-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Json.API</li>
              </ul>
              <ul>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Mantine</li>
              </ul>
            </div>
            <div className="Project-buttons">
              <a href="https://feel-empowered.netlify.app/" target="_blank" rel="noopener noreferrer" className="Project-button">Check out</a>
            </div>
          </div>
          <div className="Project-box">
            <img
              className="Project-cover"
              src={Portfolio}
              alt="Portfolio Project"
            />
            <div className="Project-title">Coding Leila</div>
            <div className="Project-desc">
              Explore a collection of my projects showcasing my skills in web development and design. From interactive games to user-friendly websites.
            </div>
            <div className="Project-lang">
              <ul className="Portfolio-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
              </ul>
            </div>
            {/* <div className="Project-buttons">
              <button className="Project-button">Download Layout</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
