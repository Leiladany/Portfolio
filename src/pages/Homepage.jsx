const Homepage = () => {
  return (
    <div>
      <div className="bigBox">
        <div className="MyServices">
          <h1>My Services</h1>
          <div className="button-container">
            <section>
              <img src="/Images/wdicon.png" alt="Web Development" />
              <p>Web Development</p>
            </section>
            <section>
              <img src="/Images/wdeicon.png" alt="Web Design" />
              <p>Web Design</p>
            </section>
            <section>
              <img src="/Images/veicon.png" alt="Video Editing" />
              <p>Video Editing</p>
            </section>
          </div>
        </div>
      </div>
      <div className="bigBox">
        <div className="Projects">
          <h1>Projects</h1>
          <div className="button-container">
            <button>
              <img src="/public/Images/gamepad-icon.png" alt="Web Development" />
              <p>Games</p>
            </button>
            <button>
              <img src="/Images/wdeicon.png" alt="Web Design" />
              <p>Online Agenda</p>
            </button>
            <button>
              <img src="/Images/veicon.png" alt="Video Editing" />
              <p>Blog</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
