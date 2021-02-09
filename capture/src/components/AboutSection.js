import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>We work to make</h2>
        </div>
        <div className="hide">
          <h2>
            your <span>dreams</span>
          </h2>
        </div>
        <div className="hide">
          <h2>come true.</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a est
          quo voluptas id magnam accusantium ipsam exercitationem ab eligendi?
        </p>
        <button>Contact us</button>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
