import React from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Payperclick= () => {
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Pay Per Click</h1>
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
            <li>Basic ad campaign setup and optimization</li>
            <li>Basic keyword research and selection</li>
            <li>Basic ad copy and creative development</li>
            <li>Basic budget allocation and monitoring</li>
            <li>Basic landing page review and recommendations</li>
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
           Standard Package
          </div>
          <h1>
          £ <span>1000/month</span>
          </h1>
          <ul>
            <li>Customized campaign strategy and targeting</li>
            <li>Advanced keyword analysis and targeting</li>
            <li>Customized ad copy and A/B testing</li>
            <li>Advanced budget optimization and tracking</li>
            <li>A/B testing and landing page improvements</li>
            <li>In-depth analytics and conversion tracking</li>
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
            Premium Package
          </div>
          <h1>
          £ <span>1500/month</span>
          </h1>
          <ul>
            <li>Comprehensive ad strategy and testing</li>
            <li>Extensive keyword research and refinement</li>
            <li>Compelling ad copy and high-converting designs</li>
            <li>Customized budget strategy and ROI maximization</li>
            <li>Custom landing page design and optimization</li>
            <li>Customized reporting and strategy updates</li>
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

export default Payperclick ;

