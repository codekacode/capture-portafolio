import {motion} from "framer-motion";
import {pageAnimation, titleAnim} from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return(
    <ContactStyle
      exit="exit" 
      variants={pageAnimation} 
      initial="hidden" 
      animate="show"
      style={{background: "#fff"}}>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
      </Title>
    </ContactStyle>
  )
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10 rem;
  color: #353535;
  min-height: 90vh;
`

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`

const Hide = styled.div`
  overflow: hidden;
`

export default ContactUs;