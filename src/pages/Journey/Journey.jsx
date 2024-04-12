import "./Journey.css";

const Journey = () => {
  return (
    <div className="bigBox Journey" id="journey-section">
      <div className="Journey" id="journey-section">
        <h1>Journey</h1>
        <div className="timeline">
          <div className="events">
            <div className="event-school">
              <div className="event-description">Colégio Guadalupe</div>
              <div className="event-date1">2008-2017</div>
            </div>
            <div className="event-school2">
              <div className="event-date2">2017-2018</div>
              <div className="event-description">Extrenato Gil Eanes</div>
            </div>
            <div className="event-acpp">
              <div className="event-description">
                Associação Cozinheiros Profissionais de Portugal
              </div>
              <div className="event-date1">2020</div>
            </div>
            <div className="event-lsd">
              <div className="event-date2">2021-2022</div>
              <div className="event-description">
                Lisbon School of Design - Web Designer
              </div>
            </div>
            <div className="event-ironhack">
              <div className="event-description">
                Ironhack - Web Development
              </div>
              <div className="event-date1">2023</div>
            </div>
            <div className="event-udemy1">
              <div className="event-date2">2024</div>
              <div className="event-description">Agile Project Management Certificate</div>
            </div>
            <div className="event-udemy2">
              <div className="event-description">React Native Certificate</div>
              <div className="event-date1">2024</div>
            </div>
            <div className="event-udemy3">
              <div className="event-date2">2024</div>
              <div className="event-description">Outsystems Certificate</div>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
