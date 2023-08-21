import React, { useState } from "react";
import Navigation from "../Components/Navigation/navigation";
import Login from "../Components/Login/login";
import Pricing from "../Components/pricing/pricing";
import ribbon from "../assets/ribbon.png";
import Footer from "../Components/footer/footer";
const Websitedesign = () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation />
      <div className="Pricing" id="Pricing" data-aos="fade-up">
        <h1>Website Design</h1>
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
              <li>Responsive design with up to 5 pages</li>
              <li>HTML/CSS/JavaScript development</li>
              <li>Basic CMS integration (e.g., WordPress)</li>
              <li>Basic mobile optimization</li>
              <li>Basic contact form setup</li>
              <li>Basic on-page SEO setup</li>
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
              <li>Unique and modern design with up to 10 pages</li>
              <li>Interactive elements and animations</li>
              <li>CMS setup and content population</li>
              <li>Enhanced mobile user experience</li>
              <li>Customized contact forms and features</li>
              <li>Comprehensive on-page SEO optimization</li>
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
              <li>Bespoke and captivating design with up to 15 pages</li>
              <li>Advanced front-end features and effects</li>
              <li>Custom CMS integration and training</li>
              <li>Optimized for all devices and screen sizes</li>
              <li>Advanced form functionalities and validation</li>
              <li>Advanced SEO strategies and site structure</li>
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
      <Login service="website design" packageName={packageName} />
      <Footer />
    </div>
  );
};

export default Websitedesign;
