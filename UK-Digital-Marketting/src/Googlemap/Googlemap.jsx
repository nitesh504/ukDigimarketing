import React,{useState} from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Googlemap = () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation />
      <div className="Pricing" id="Pricing" data-aos="fade-up">
        <h1>Google Map</h1>
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
              <li> Verification and basic GMB setup</li>
              <li>Basic map integration and location marking</li>
              <li>Basic business description and keywords</li>
              <li>Basic review monitoring and response</li>
              <li>Basic local SEO techniques and citations</li>
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
              Standard Package
            </div>
            <h1>
              £ <span>1000/month</span>
            </h1>
            <ul>
              <li>Enhanced GMB setup and optimization</li>
              <li>Enhanced map integration and markers</li>
              <li>Comprehensive description and SEO keywords</li>
              <li>Enhanced review management and reputation</li>
              <li>Advanced local SEO strategies and listing</li>
              <li>In-depth analytics and growth analysis</li>
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
              Premium Package
            </div>
            <h1>
              £ <span>1500/month</span>
            </h1>
            <ul>
              <li>Customized GMB optimization and strategy</li>
              <li>Customized map design and user experience</li>
              <li>Customized content and keyword strategy</li>
              <li>Proactive reputation management strategy</li>
              <li>Comprehensive local SEO and backlinking</li>
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
      <Login service="Google Map" packageName={packageName} />
      <Footer />
    </div>
  )
}

export default Googlemap;
