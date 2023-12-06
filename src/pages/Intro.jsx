import { useEffect } from "react";

const Intro = () => {
  useEffect(() => {
    // Add a class to the body element when the component mounts
    document.body.classList.add("hide-navbar");

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove("hide-navbar");
    };
  }, []);

  const handleClick = () => {
    window.location.href = "/Homepage";
  };

  return (
    <div className="intro">
      <h1>✨Hellooo Everyone! My name is Leila Teixeira✨</h1>
      <h2>
        Diving into the digital realm is my thing! With a knack for crafting
        experiences, I have poured my creativity into UX/UI design, ensuring
        users feel understood and appreciated when navigating the digital world.
        But wait, there is more! Not only do I design these experiences, I bring
        them to life as a Web Developer. Pixels, codes, designs, or animations,
        you name it, I have played with it. So, whether you are looking for a
        sleek design, efficient code, or just want to geek out about the latest
        web trends, I am your go-to person.{" "}
      </h2>
      <button className="intro-button" onClick={handleClick}>
        Lets create something awesome together! 💫
      </button>
    </div>
  );
};

export default Intro;
