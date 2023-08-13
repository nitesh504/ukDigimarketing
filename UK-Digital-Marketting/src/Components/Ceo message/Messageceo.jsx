import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import img from "./PrabeshKc-2.jpeg"
const Messageceo = () => {
  return (
    
      <div className="messege">
      <div className="messege-card">
        <div className="messege-card-left">
          <img src={img}  style={{objectFit:"cover"}} alt="" srcset="" />
          <span>
            <a href="https://www.facebook.com/prabesh.kc">
              <BsFacebook
                size={25}
                className="fa-icon"
                href="https://www.facebook.com/prabesh.kc"
              />
            </a>
            <a href="https://www.instagram.com/sailesh_7maharjan/">
              <BsInstagram
                size={25}
                className="fa-icon"
                href="https://www.instagram.com/sailesh_7maharjan/"
              />
            </a>
            <a href="https://www.linkedin.com/in/saileshmaharjan/">
              <BsLinkedin
                size={25}
                className="fa-icon"
                href="https://www.linkedin.com/in/saileshmaharjan/"
              />
            </a>
          </span>
        </div>
        <div className="messege-card-right" data-aos="zoom-out">
          <h1>Prabesh KC</h1>
          <h2 style={{ color: "#b9001f" }}>CEO</h2>
          <div className="messege-card-right-article">
            <RiDoubleQuotesL
              size={52}
              color="#b9001f"
              className="upper-quote"
            />
            <p style={{ color: "#000" }}>
            Improve Your Digital Presence: Harness the Power of Our SEO Specialists to Elevate Your Brand's Success. Utilize Natural Traffic to Outperform Competitors and Increase Conversions. Count on Our Proven Expertise, Tailored Strategies, and Committed Team to Propel Your Business to New Heights. Embrace SEO Excellence and Unleash Your Digital Triumph Today!
            </p>
            <RiDoubleQuotesR
              size={52}
              color="#b9001f"
              alig
              className="lower-quote"
            />
          </div>
        </div>
      </div>
      
     
    </div>
    
  )
}

export default Messageceo
