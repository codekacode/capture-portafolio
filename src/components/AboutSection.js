import React from 'react';
import home1 from '../img/karem.jpg';
import { Layout, Description, Image, Hide } from '../style';
import { motion } from "framer-motion";
import {titleAnim, fade, photoAnim} from "../animation"

const AboutSection = () => {

  // const container = {
  //   hidden: {x:100},
  //   show: {x:0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1}}, // when: "afterChildren"
  // };

  return (
    <Layout>
      <Description>
        <motion.div>
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
        <motion.p variants={fade}>Contac us for any idea that you have.</motion.p>
        <motion.button variants={fade}>Contact me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="my photo" with="200px" />
      </Image>
    </Layout>
  )
};

export default AboutSection;