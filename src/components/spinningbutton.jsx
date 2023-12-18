import React from 'react';
import { Link } from 'react-router-dom';

const SpinningButton = ({ to, imageSrc, alt, text }) => {
  return (
    <Link to={to} className="spinning-button">
      <div className="button-content">
        <img src={imageSrc} alt={alt} className="spin-image" />
        <p className="spin-text">{text}</p>
      </div>
    </Link>
  );
};

export default SpinningButton;
