import React from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Facebookboosting = () => {
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Facebook Boosting</h1>
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
            <li>Standard ad copy and basic creative design</li>
            <li>Basic audience targeting setup</li>
            <li>Performance summary and insights monthly</li>
            <li>Basic ad spend management and optimization</li>
            
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
            Pro Package
          </div>
          <h1>
          £ <span>1500/month</span>
          </h1>
          <ul>
            <li>Engaging ad copy and creative with A/B testing</li>
            <li>Advanced audience targeting and setup</li>
            <li>Bi-weekly detailed performance analysis</li>
            <li>Proactive ad budget allocation and optimization</li>
            <li>Basic landing page review and optimization</li>
            
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
           Ultimate Package
          </div>
          <h1>
          £ <span>1000/month</span>
          </h1>
          <ul>
            <li>Custom ad copy and high-conversion creative design</li>
            <li>Expert audience analysis and precise targeting</li>
            <li>Weekly performance report with optimization tips</li>
            <li>Custom ad budget strategy and ROI maximization</li>
            <li>Comprehensive landing page A/B testing and improvements</li>
            <li>Expert consultation and continuous campaign improvement</li>
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

export default Facebookboosting;

