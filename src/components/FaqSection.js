import {useState} from "react";
import styled from "styled-components";
import {Layout} from '../style';
import Toggle from "./Toggle";
import {AnimateSharedLayout} from "framer-motion";
import {useScroll} from "./useScroll"
import {fade} from "../animation"

const FaqSection = () => {
  const [element, controls] = useScroll();
  return(
    <Faq
      variants={fade}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
              <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
            </div> 
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
              <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="Diferent Payment">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
              <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
            </div>
          </div>
        </Toggle>
        <Toggle title="What product do you offer?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
              <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
            </div>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    margin: 2rem 0rem;
    width: 100%;
    height: 0.2rem;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`

export default FaqSection;