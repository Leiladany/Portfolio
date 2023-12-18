// Game.jsx
import React from "react";

const Game = () => {
  return (
    <div className="game-container">
      <div className="game">
        <img src="/public/Images/game-img1.png" alt="Game 1" />
        <div className="game-info">
          <h3>Escaping-Westview</h3>
          <p>
            Step into the mesmerizing universe of 'Escaping Westview,' a 2D game
            inspired by Marvel's 'WandaVision.' Your mission: dodge the
            relentless spells cast by the cunning witch Agatha Harkness.
            <br></br>
            <br></br> Use your reflexes to maneuver up, down, and sideways,
            navigating a visually stunning landscape reminiscent of the Disney+
            series. <br></br> <br></br>Crafted with JavaScript (ES6), HTML,
            Canvas, and CSS, this game seamlessly blends technology and magic.{" "}
            <br></br>
            <br></br>Your goal is simple yet challenging: avoid Agatha's spells
            for as long as possible. The tension builds with each successful
            dodge until you are inevitably hit, revealing your final spell
            count. <br></br>
            <br></br>Immerse yourself in 'Escaping Westview' and experience the
            thrill of skillful evasion in a captivating, bite-sized gaming
            adventure. How long can you outsmart Agatha's magic?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
