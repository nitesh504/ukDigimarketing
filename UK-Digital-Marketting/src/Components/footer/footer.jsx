import React from "react";
import locationimg from "../../assets/location.png";
import mailimg from "../../assets/mail.png";
import phoneimg from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import logo1 from "../../assets/logo1.png";

const Footer = () => {

  const facebookUrl = "https://www.facebook.com/sailesh.lion";
  const instagramUrl = "https://www.instagram.com/sailesh_7maharjan/";
  const twitterUrl = "https://twitter.com/your-page";
  
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-service">
          <h2>Services</h2>
          <div>
            <ul>
              <li>
                <p>Search Engine Marketing</p>
              </li>
              <li>
                <p>Data Science & Analytics</p>
              </li>
              <li>
                <p>Mobile Marketing</p>
              </li>
              <li>
                <p>Content Marketing</p>
              </li>
              <li>
                <p>Engagement Marketing</p>
              </li>
              <li>
                <p>Social Media Marketing</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h2>Contact</h2>
          <div>
            {/* <p>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit. Nam
              Pellentisque Justo Ligla.
            </p> */}
            <span>
              <img src={locationimg} alt="" srcset="" />
              69 Aldwick Road
            </span>
            <br />
            <span>
              <img src={mailimg} alt="" srcset="" />
              hr@uksmm.com
            </span>
            <br />
            <span>
              <img src={phoneimg} alt="" srcset="" />
              +44 7590612196
            </span>
          </div>
        </div>
        <div>
          <h2>Touch</h2>
          <div className="footer-social">
  <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
    <img src={facebook} alt="" />
  </a>
  <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
    <img src={instagram} alt="" />
  </a>
  <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
    <img src={twitter} alt="" />
  </a>
</div>

        </div>
      </div>
      <img  width={180} src={logo1} alt="" srcset="" />
      
      <div style={{ marginTop: "1rem" }}>
        <hr />
        <center style={{ padding: "1rem" }}>
          Copyright 2023 UK Digital Marketing inc, All rights reserved
        </center>
        <hr />
      </div>
    </div>
  );
};

export default Footer;
