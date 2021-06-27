import {useState} from "react";
import styled from "styled-components";
import {Layout} from '../style';
import Toggle from "./Toggle"

const FaqSection = () => {
  return(
    <Faq>
      <h2>Any Questions <span>FAQ</span></h2>
      <Toggle>
        <div className="question">
          <h4>How Do I Start?</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
            <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <Toggle>
        <div className="question">
          <h4>Daily Schedule</h4>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
            <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
          </div>
          <div className="faq-line"></div>
        </div>
      </Toggle>
      <div className="question">
        <h4>Diferent Payment</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
          <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What product do you offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet, consectetur jahdja</p>
          <p>Lorem ipsum dolor sit amet, consectetur jahdja Nececitabu haba</p>
        </div>
        <div className="faq-line"></div>
      </div>
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