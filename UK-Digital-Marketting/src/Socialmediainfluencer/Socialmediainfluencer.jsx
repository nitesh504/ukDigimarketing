import React,{useState}from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Socialmediainfluencer= () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Social Media Influncer Marketing</h1>
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
            <li>Basic identification of suitable influencers</li>
            <li>Basic outreach and negotiation with influencers</li>
            <li>Coordinating campaigns with influencers</li>
            <li>Co-creating content with influencers</li>
            <li>Basic performance metrics and insights</li>
            <li>Basic influencer campaign summary</li>
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
           Silver Package
          </div>
          <h1>
          £ <span>1000/month</span>
          </h1>
          <ul>
            <li>In-depth research and evaluation of influencers</li>
            <li>Professional influencer communication and negotiation</li>
            <li>Comprehensive influencer campaign management</li>
            <li>Professional content production and collaboration</li>
            <li>In-depth tracking of influencer campaign ROI</li>
            <li>Detailed influencer performance analysis</li>
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
            Gold Package
          </div>
          <h1>
          £ <span>1500/month</span>
          </h1>
          <ul>
            <li>Customized selection based on brand fit and reach</li>
            <li>Customized influencer partnerships and collaborations</li>
            <li>End-to-end management of influencer collaborations</li>
            <li>Custom content creation for influencer partnerships</li>
            <li>Comprehensive analysis and optimization for results</li>
            <li>Customized reporting and strategy updates</li>
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
    <Login service="Social media influncer" packageName={packageName} />
      <Footer/>
    </div>
  )
}

export default Socialmediainfluencer;
