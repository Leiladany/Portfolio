import { useEffect } from "react";
import onagendaimg1 from "../assets/Images/onagenda-img1.png"

const OnlineAgenda = () => {
  useEffect(() => {
    document.body.classList.add("game-page");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("game-page");
    };
  }, []);

  return (
    <div className="onagenda-container">
      <div className="onagenda">
        <img src={onagendaimg1} alt="Online Agenda" />
        <div className="onagenda-info">
          <h3>Pawsitive Pets</h3>
          <p>
            Discover "PawsitivePets," a sleek website tailored for pet lovers.
            <br></br>
            <br></br> Crafted with <strong>JavaScript (ES6)</strong>,{" "}
            <strong>Express.Js</strong>, <strong>Node.Js</strong>, and backed by
            a reliable <strong>MongoDB</strong> database, it offers a secure
            haven for your pet's information. <br></br>
            <br></br>With an aesthetically pleasing interface using{" "}
            <strong>HTML</strong> and <strong>CSS</strong>, PawsitivePets
            ensures an enjoyable experience. The integration of a robust{" "}
            <strong>JSON API</strong> facilitates timely reminders for pet
            appointments.<br></br>
            <br></br>Explore PawsitivePets, where pet care meets simplicity.
          </p>
        </div>
      </div>
      <div className="try-me-container">
        <a
          href="https://pawsitive-pets.adaptable.app/"
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

export default OnlineAgenda;