import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/_yuvrajjj_?igsh=a3Z3MGZ5aHgwNjEw&utm_source=qr" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/yuvraj-chawla-6ab863229/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://github.com/Yuvraj-28" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:chawlayuvraj@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;