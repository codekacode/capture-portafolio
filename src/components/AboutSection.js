import React from 'react';
import home1 from '../img/karem.jpg';
import { Layout, Description, Image, Hide } from '../style';
import { motion } from "framer-motion";

const AboutSection = () => {

  const titleAnim = {
    hidden: {opacity:0},
    show: {opacity:1, transition: {duration: 2}}
  };

  const container = {
    hidden: {x:100},
    show: {x:0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1}}, // when: "afterChildren"
  };

  return (
    <Layout>
      <Description>
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="show" 
          className="title">
          <Hide>
              <motion.h2 variants={titleAnim}>
                  I work to make
              </motion.h2>
          </Hide>
          <Hide>
              <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
          </Hide>
          <Hide>
              <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
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