import React,{useState}from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Seo = () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Search Engine Optimization(SEO)</h1>
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
            <li>Basic website audit and SEO analysis</li>
            <li>Basic keyword research and analysis</li>
            <li>Basic on-page SEO setup</li>
            <li>Basic off-page SEO techniques</li>
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
            <li>In-depth website analysis and optimization</li>
            <li>Advanced keyword research and competitor analysis</li>
            <li>Comprehensive on-page optimization</li>
            <li>Advanced off-page strategies and link building</li>
            <li>Enhanced local SEO strategies and listings</li>
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
            <li>Comprehensive website audit and competitor analysis</li>
            <li>Customized keyword strategy and targeting</li>
            <li>Advanced on-page SEO strategies</li>
            <li>Customized off-page SEO and outreach</li>
            <li>Customized local SEO and NAP consistency</li>
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
    <Login service="Seo" packageName={packageName} />
      <Footer/>
    </div>
  )
}

export default Seo;
