import Projects from "./Projects/Projects";
import About from "./About/About";
import Journey from "./Journey/Journey";
import SocialMedia from "./Socialmedia/Socialmedia";

const Homepage = () => {
  return (
    <div>
      <About />
      <Projects />
      <Journey />
      <SocialMedia />
    </div>
  );
};

export default Homepage;
