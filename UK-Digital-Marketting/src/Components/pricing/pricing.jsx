import React from "react";
import "./pricing.css";
import ribbon from "../../assets/ribbon.png";

const Pricing = () => {
  return (
    <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Pricing</h1>
      <p>Our Best Packages</p>
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
            Social Media Marketing
          </div>
          <h1>
            € <span>500/month</span>
          </h1>
          <ul>
            <li>Facebook Boosting</li>
            <li>Ad Copy</li>
            <li>Social Media Account Setup</li>
            <li>Monthly Performance Report</li>
            <li>Social Media Content Creation</li>
            <li>Community Engagement</li>
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
            Graphics Design
          </div>
          <h1>
            € <span>1000/month</span>
          </h1>
          <ul>
            <li>All services from the Starter Package.</li>
            <li>Advanced Social Media Content Creation</li>
            <li>Social Media Strategy Development</li>
            <li>Social Media Advertising Campaigns</li>
            <li>Influencer Outreach</li>
            <li>Expanded Social Media Analytics</li>
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
            Platinum Package
          </div>
          <h1>
            € <span>1500/month</span>
          </h1>
          <ul>
            <li>All services from the Gold Package.</li>
            <li>Social Media Account Management</li>
            <li>Social Media Listening and Reputation Management</li>
            <li>Advanced Social Media Advertising</li>
            <li>Social Media Influencer Marketing</li>
            <li>Customized Social Media Reports</li>
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
  );
};

export default Pricing;
