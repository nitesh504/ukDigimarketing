import React from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Emailmarketing = () => {
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Email Marketing</h1>
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
            <li>Basic email template design</li>
            <li>Basic list management and segmentation</li>
            <li>Basic campaign setup and manual sending</li>
            <li>Basic A/B testing of subject lines</li>
            <li>2 email newsletters per month</li>
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
            <li>Custom email template design</li>
            <li>Advanced list management and targeting</li>
            <li>Automated campaigns and triggered emails</li>
            <li>Advanced testing and performance analysis</li>
            <li>4 email newsletters per month</li>
            <li>In-depth analytics and ROI analysis</li>
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
            <li>Responsive and eye-catching designs</li>
            <li>Customized subscriber journey and segments</li>
            <li>Advanced automation and drip campaigns</li>
            <li>Comprehensive testing and optimization</li>
            <li>6 email newsletters per month</li>
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

export default Emailmarketing ;

