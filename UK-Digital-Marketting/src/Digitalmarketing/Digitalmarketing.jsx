import React,{useState}from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Digitalmarketing = () => {
  const [packageName, setPackageName] = useState("");
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
            <li>Keyword research and basic on-page SEO</li>
            <li>Setup and management of one ad campaign</li>
            <li>One blog post or article per month</li>
            <li>Basic email template and one campaign setup</li>
            <li>Setup and management of one platform</li>
            <li>Basic performance summary and insights</li>
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
            <li>Comprehensive on-page and off-page SEO</li>
            <li>Multiple ad campaigns and A/B testing</li>
            <li>Bi-weekly content creation and promotion</li>
            <li>Customized email campaigns and automation</li>
            <li>Multiple platforms and ad variations</li>
            <li>In-depth analytics and ROI analysis</li>
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
            <li>Advanced SEO strategies and competitor analysis</li>
            <li>Customized ad strategy and conversion optimization</li>
            <li>Weekly content creation and outreach</li>
            <li>Drip campaigns and segmentation</li>
            <li>Comprehensive social media ad strategy</li>
            <li>Customized reporting and growth recommendations</li>
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
    <Login service="Digital marketing" packageName={packageName} />
      <Footer/>
    </div>
  )
}

export default Digitalmarketing;
