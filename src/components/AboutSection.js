import React from 'react';
import home1 from '../img/karem-codeable-medium.jpg';
import { Layout, Description, Image, Hide } from '../style';

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
              <h2>I work to make</h2>
          </Hide>
          <Hide>
              <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
              <h2>true.</h2>
          </Hide>
        </div>
        <p>Contac us for any idea that you have.</p>
        <button>Contact me</button>
      </Description>
      <Image>
        <img src={home1} alt="my photo" with="200px" />
      </Image>
    </Layout>
  )
};

export default AboutSection;