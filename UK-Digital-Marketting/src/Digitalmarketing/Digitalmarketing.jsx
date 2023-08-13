import React from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Digitalmarketing = () => {
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Digital Marketing</h1>
      <p>our best packages</p>
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
            Basic Package
          </div>
          <h1>
          £ <span>500/month</span>
          </h1>
          <ul>
            <li>UKeyword research and basic on-page SEO</li>
            <li>Setup and management of one ad campaign</li>
            <li>One blog post or article per month</li>
            <li>Basic email template and one campaign setup</li>
            <li>Setup and management of one platform</li>
            <li>Basic performance summary and insights</li>
          </ul>
          <button>Get Started</button>
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
           Silver Package
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
          <button>Get Started</button>
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
            Gold Package
          </div>
          <h1>
          £ <span>1500/month</span>
          </h1>
          <ul>
            <li>Complete brand identity package</li>
            <li>Comprehensive stationery suite with multiple options</li>
            <li>20 custom social media graphics</li>
            <li>10 website banners with various sizes</li>
            <li>Comprehensive marketing material design</li>
            <li>Detailed brand guidelines with color and font specifications</li>
          </ul>
          <button>Get Started</button>
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
      <Login/>
      <Footer/>
    </div>
  )
}

export default Digitalmarketing;
