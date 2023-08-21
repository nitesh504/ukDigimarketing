import React, { useState, useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png";
import { BiDownArrow } from "react-icons/bi";
import "./navbar.css";
import { Link, NavLink, Routes } from "react-router-dom";
const Navigation = () => {
  const [showResponsiveNav, setShowResponsiveNav] = useState(true);
  return (
    <nav className="topnav" id="myTopnav">
      <div className="logo">
        <img width={150} src={logo} alt="Digital Marketing" />
        <li className="icon">
          {
            <GiHamburgerMenu
              size={25}
              color="black"
              onClick={() => setShowResponsiveNav(!showResponsiveNav)}
            />
          }
        </li>
      </div>
      <ul className={showResponsiveNav ? "navBody" : "click"}>
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li className="dropdown">
          <a className="drop-anchor">
            Pricing
            <BiDownArrow size={13} />
          </a>
          <div className="dropdown-content  ">
            <Link to="/socialmediamarketing">Social Media Marketing</Link>
            <Link to="/graphicsdesigns">Graphics Designs</Link>
            <Link to="/facebookboosting">Facebook Boosting</Link>
            <Link to="/websitedesign"> Website Design</Link>
            <Link to="/digitalmarketing"> Digital Marketing</Link>
            <Link to="/contentwriting"> Content Writing</Link>
            <Link to="/socialmediamanagement"> Social Media Management</Link>
            <Link to="/Ecommerce">
              Ecommerce Website Management (Amazon, Shopify, WooCommerce)
            </Link>
            <Link to="/videoediting"> Video Editing</Link>

            <Link to="/mapseo">
              Google Map / Google My Business Creation and Management with SEO
            </Link>
            <Link to="/seo"> Search Engine Optimization</Link>
            <Link to="/emailmarketing"> Email Marketing</Link>
            <Link to="/payperclick"> Pay-Per-Click (PPC) Advertising</Link>
            <Link to="/socialmediainfluencer">
              Social Media Influencer Marketing
            </Link>
            <Link to="/contentmarketing"> Content Marketing</Link>
            <Link to="/websitemanagement">Website Maintenance and Support</Link>
          </div>
        </li>
        {/* <Link href="#request">
          <button>Privacy policy</button>
        </Link> */}
        <li>
          <a href="#request" className="request-btn">
            <button>Request a quote </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
