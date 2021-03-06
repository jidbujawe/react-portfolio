import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { AboutStyled, DescriptionStyled, ImageStyled } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();

  return (
    <ServicesStyled
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <DescriptionStyled>
        <h2>
          High <span>quality</span> services.
        </h2>
        <CardsStyled>
          <CardStyled>
            <div className="icon">
              <img src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <img src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <img src={diaphragm} />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyled>
          <CardStyled>
            <div className="icon">
              <img src={money} />
              <h3>Money</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </CardStyled>
        </CardsStyled>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home2} alt="camera on set" />
      </ImageStyled>
    </ServicesStyled>
  );
};

const ServicesStyled = styled(AboutStyled)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding-top: 2rem 0rem 4rem 0rem;
  }
`;

const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const CardStyled = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
