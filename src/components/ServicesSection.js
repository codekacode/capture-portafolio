import clock from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
  return(
    <div className="services">
      <div className="description">
        <h2>High <span>quality</span> service.</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphgram} alt="icon" />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="image" />
      </div>
    </div>
  );
};

export default ServicesSection;