import { useEffect } from "react";
import gameimg1 from "../assets/Images/game-img1.png"

const Game = () => {
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
        <img src={gameimg1} alt="Game 1" />
        <div className="game-info">
          <h3>Escaping-Westview</h3>
          <p>
            Step into 'Escaping Westview,' a 2D game inspired by Marvel's
            'WandaVision'. <br></br> <br></br>Dodge spells from the cunning
            witch Agatha Harkness. <br></br> <br></br>Use reflexes to navigate a
            visually stunning landscape, crafted with{" "}
            <strong>JavaScript</strong>, <strong>HTML</strong>,{" "}
            <strong>Canvas</strong>, and <strong>CSS</strong>. <br></br>{" "}
            <br></br>Your goal: avoid Agatha's spells for as long as possible.{" "}
            <br></br> <br></br> How long can you outsmart Agatha's magic?
          </p>
        </div>
      </div>
      <div className="try-me-container">
        <a
          href="https://leiladany.github.io/Escaping-Westview/"
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

export default Game;
