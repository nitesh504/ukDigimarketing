import React, { useState } from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const SocialmediaMarketing = () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation />
      <div className="Pricing" id="Pricing" data-aos="fade-up">
        <h1>Social Media Marketing</h1>
        <p>Pricing</p>
        <div className="pricing-container">
          <div className="Pricing-card">
            <div
              style={{
                backgroundColor: "#c8102e",
                padding: "1.2rem",
                color: "#fff",
                fontSize: "1.2rem",
                width: "100%",
              }}
            >
              Silver Package
            </div>
            <h1>
              £ <span>500/month</span>
            </h1>
            <ul>
              <li>Facebook ad setup and optimization</li>
              <li>Basic ad copy for campaigns</li>
              <li>Setup of 2 social media accounts</li>
              <li>Performance summary and insights monthly</li>
              <li>5 custom graphics/posts per month</li>
              <li>Basic responses to comments and messages</li>
            </ul>
            <a href="#contact" className="pricingBtn">
              <button onClick={() => setPackageName("Basic")}>
                Get Started
              </button>
            </a>
          </div>
          <div className="Pricing-card">
            <div
              style={{
                backgroundColor: "#c8102e",
                padding: "1.2rem",
                color: "#fff",
                fontSize: "1.2rem",
                width: "100%",
              }}
            >
              Platinum Package
            </div>
            <h1>
              £ <span>1000/month</span>
            </h1>
            <ul>
              <li>Advanced Facebook ad targeting and optimization</li>
              <li>Engaging ad copy with A/B testing</li>
              <li>Setup of 4 social media accounts</li>
              <li>Bi-weekly in-depth performance and ROI analysis</li>
              <li>10 custom graphics/posts per month</li>
              <li>Engaging with audience and fostering community</li>
            </ul>
            <a href="#contact" className="pricingBtn">
              <button onClick={() => setPackageName("Standard")}>
                Get Started
              </button>
            </a>
          </div>
          <div className="Pricing-card">
            <div
              style={{
                backgroundColor: "#c8102e",
                padding: "1.2rem",
                color: "#fff",
                fontSize: "1.2rem",
                width: "100%",
              }}
            >
              Diamond Package
            </div>
            <h1>
              £ <span>1500/month</span>
            </h1>
            <ul>
              <li>Personalized ad strategy and constant refinement</li>
              <li>Customized ad copy for different target groups</li>
              <li>Customized setup for up to 6 social media accounts</li>
              <li>Weekly reports with actionable recommendations</li>
              <li>20 custom graphics/posts per month</li>
              <li>Proactive community management and growth tactics</li>
            </ul>
            <a href="#contact" className="pricingBtn">
              <button onClick={() => setPackageName("Premium")}>
                Get Started
              </button>
            </a>
            <img
              className="ribbonimg"
              src={ribbon}
              alt=""
              width={"50px"}
              srcset=""
            />
          </div>

        </div>
      </div>
      <Login service="Social media marketing" packageName={packageName} />
      <Footer />
    </div>
  )
}

export default SocialmediaMarketing
