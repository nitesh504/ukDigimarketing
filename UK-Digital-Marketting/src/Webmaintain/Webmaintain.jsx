import React from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Webmaintain = () => {
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Graphics Design</h1>
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
            Bronze Package
          </div>
          <h1>
          £ <span>500/month</span>
          </h1>
          <ul>
            <li>Basic updates and maintenance tasks</li>
            <li>Basic performance checks and optimizations</li>
            <li>Basic support for website issues and inquiries</li>
            <li>Basic data backups and recovery procedures</li>
            <li>Basic security scans and vulnerability checks</li>
            <li>Basic maintenance summary and updates</li>
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
            <li>Regular content and plugin updates</li>
            <li>Regular performance analysis and improvements</li>
            <li>Priority support and faster issue resolution</li>
            <li>Regular data backups and disaster recovery</li>
            <li>Regular security audits and patches</li>
            <li>Detailed maintenance report and recommendations</li>
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
            <li>Proactive maintenance and security checks</li>
            <li>Comprehensive performance optimization</li>
            <li>Dedicated technical support and rapid response</li>
            <li>Customized backup solutions and data protection</li>
            <li>Advanced security measures and threat detection</li>
            <li>Customized reporting and proactive suggestions</li>
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

export default Webmaintain ;
