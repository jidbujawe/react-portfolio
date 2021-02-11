import styled from "styled-components";
import { motion } from "framer-motion";

// Styled components
export const AboutStyled = styled(motion.div)`
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 4rem 2rem;
    text-align: center;
  }
`;

export const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const HideStyled = styled.div`
  overflow: hidden;
`;
