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
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <motion.div>
          <HideStyled>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </HideStyled>
          <HideStyled>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </HideStyled>
          <HideStyled>
            <motion.h2 variants={titleAnim}>come true.</motion.h2>
          </HideStyled>
          <motion.p variants={fade}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a
            est quo voluptas id magnam accusantium ipsam exercitationem ab
            eligendi?
          </motion.p>
          <motion.button variants={fade}>Contact us</motion.button>
        </motion.div>
      </DescriptionStyled>
      <ImageStyled>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          // add initial and animate to get out of being part in staggering
          src={home1}
          alt="guy with a camera"
        />
      </ImageStyled>
      <Wave />
    </AboutStyled>
  );
};

export default AboutSection;
