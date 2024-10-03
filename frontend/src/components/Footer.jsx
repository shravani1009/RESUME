import "./FooterStyles.css";
import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome className="icon" />
            <p>Navi Mumbai</p>
          </div>
          <div className="phone">
            <FaPhone className="icon" />
            <p>8779752536</p>
          </div>
          <div className="email">
            <FaMailBulk className="icon" />
            <p>shravani14100@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <div className="social">
            <p>Find me on!</p>
            <FaGithub className="icon" />
            <FaLinkedin className="icon" />
            <FaTwitter className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
