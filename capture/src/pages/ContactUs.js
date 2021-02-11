import React from "react";

import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { HideStyled } from "../styles";

const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <HideStyled>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </HideStyled>
      </Title>
      <div>
        <HideStyled>
          <Social variants={titleAnim}>
            <Circle />
            <h2>LinkedIn</h2>
          </Social>
        </HideStyled>
        <HideStyled>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Github</h2>
          </Social>
        </HideStyled>
      </div>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
