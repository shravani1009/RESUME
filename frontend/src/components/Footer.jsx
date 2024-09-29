import "./FooterStyles.css";
import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
       
        <div className="left">
          
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Navi Mumbai</p>
            </div>
          </div>

       
          <div className="phone">
            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>8779752536</p>
            </div>
          </div>

          <div className="email">
            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>shravani14100@gmail.com</p>
            </div>
          </div>
        </div>

       
        <div className="right">
          <div className="social">
            <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />



          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
