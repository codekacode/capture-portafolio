import React from 'react';
import home1 from '../img/karem-codeable.jpg'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
              <h2>I work to make</h2>
          </div>
          <div className="hide">
              <h2>your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
              <h2>true.</h2>
          </div>
        </div>
        <p>Contac us for any idea that you have.</p>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img src={home1} alt="my photo" />
      </div>
    </div>
  )
};

export default AboutSection;