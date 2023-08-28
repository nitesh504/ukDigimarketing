import React from "react";
import locationimg from "../../assets/location.png";
import mailimg from "../../assets/mail.png";
import phoneimg from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import logo1 from "../../assets/logo1.png";
import { Link } from "react-router-dom";
// import { Context as ResponsiveContext } from 'react-responsive'

const Footer = () => {
  const facebookUrl = "https://www.facebook.com/sailesh.lion";
  const instagramUrl = "https://www.linkedin.com/in/digimarketinguk-limited-4b2b67288/";
  

  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-service">
          <h2>Services</h2>
          <div>
            <ul>
              <li>
                <Link to="/socialmediamarketing">Social Media Marketing</Link>
              </li>
              <li>
                <Link to="/websitedesign">Website Design</Link>
              </li>
              <li>
                <Link to="/socialmediamanagement">Social Media Management</Link>
              </li>
              <li>
                <Link to="/payperclick">Pay-Per-Click (PPC) Advertising</Link>
              </li>
              <li>
                <Link to="/websitemanagement">
                  Website Maintenance and Support
                </Link>
              </li>
              <li>
                <Link to="/graphicsdesigns">Graphics Designs</Link>
              </li>
              <li>
                <Link to="/digitalmarketing">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/seo">Search Engine Optimization</Link>
              </li>
              <li>
                <Link to="/socialmediainfluencer">
                  Social Media Influencer Marketing
                </Link>
              </li>
              <li>
                <Link to="/facebookboosting">Facebook Boosting</Link>
              </li>
              <li>
                <Link to="/contentwriting">Content Writing</Link>
              </li>
              <li>
                <Link to="/videoediting">Video Editing</Link>
              </li>
              <li>
                <Link to="/emailmarketing">Email Marketing</Link>
              </li>
              <li>
                <Link to="/contentmarketing">Content Marketing</Link>
              </li>
              <li>
                <Link to="/Ecommerce">
                  Ecommerce Management (Amazon, Shopify, etc)
                </Link>
              </li>
              <li>
                <Link to="/mapseo">
                  Google My Business Creation and Management with SEO
                </Link>
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
              hr@digimarketinguk.com
            </span>
            <br />
            <span>
              <img src={phoneimg} alt="" srcset="" />
              +44 7590612196
            </span>
          </div>
        </div>
        <div className="footer-social-layer">
          <h2>Touch</h2>
          <div className="footer-social">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="" />
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="" />
            </a>
         
          </div>
        </div>
      </div>
      <img width={180} src={logo1} alt="" srcset="" />

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
