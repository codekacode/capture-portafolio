import clock from '../img/clock.svg';
import diaphgram from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import { Layout, Description, Image, Hide } from '../style';
import styled from 'styled-components';

const ServicesSection = () => {
  return(
    <Services>
      <Description>
        <h2>High <span>quality</span> service.</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphgram} alt="icon" />
              <h3>Diaphgram</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem Ipsum dolor sit.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="image" />
      </Image>
    </Services>
  );
};

const Services = styled(Layout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Card = styled.div`
  flex-basis: 16rem;
  .icon {
    display: flex;
    align-items: center;
  }
`

export default ServicesSection;