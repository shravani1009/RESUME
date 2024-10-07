import "./AboutContentStyles.css";
import coffee from "../assets/coffee.jpg";
import girl from "../assets/girl.jpg";

import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hey Folks!</h1>
        <p>
          Let's build something amazing together! Feel free to reach out if you'd
          like to discuss a project, collaboration, or just want to say hello.
          I'm always excited to connect with new people.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={coffee} className="img" alt="coffee" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
