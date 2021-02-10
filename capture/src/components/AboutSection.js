import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled className="description">
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

// Styled components
const AboutStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const HideStyled = styled.div`
  overflow: hidden;
`;

export default AboutSection;
