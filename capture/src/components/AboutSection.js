import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import {
  AboutStyled,
  DescriptionStyled,
  HideStyled,
  ImageStyled,
} from "../styles";

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <div className="title">
          <HideStyled>
            <h2>We work to make</h2>
          </HideStyled>
          <HideStyled>
            <h2>
              your <span>dreams</span>
            </h2>
          </HideStyled>
          <HideStyled>
            <h2>come true.</h2>
          </HideStyled>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a
            est quo voluptas id magnam accusantium ipsam exercitationem ab
            eligendi?
          </p>
          <button>Contact us</button>
        </div>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home1} alt="guy with a camera" />
      </ImageStyled>
    </AboutStyled>
  );
};

export default AboutSection;
