import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import {
  AboutStyled,
  DescriptionStyled,
  HideStyled,
  ImageStyled,
} from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <motion.div>
          <HideStyled>
            <motion.h2>We work to make</motion.h2>
          </HideStyled>
          <HideStyled>
            <motion.h2>
              your <span>dreams</span>
            </motion.h2>
          </HideStyled>
          <HideStyled>
            <motion.h2>come true.</motion.h2>
          </HideStyled>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a
            est quo voluptas id magnam accusantium ipsam exercitationem ab
            eligendi?
          </p>
          <button>Contact us</button>
        </motion.div>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home1} alt="guy with a camera" />
      </ImageStyled>
    </AboutStyled>
  );
};

export default AboutSection;
