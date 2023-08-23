import React,{useState} from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Ecommerce= () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Ecommerce Website Management</h1>
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
            <li>Up to 20 products listed and optimized</li>
            <li>Basic order management and fulfillment</li>
            <li>Basic customer inquiries and support</li>
            <li>Basic SEO for product pages</li>
            <li>1 marketing campaign per month</li>
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
            <li>Up to 50 products listed and optimized</li>
            <li>Streamlined order processing and fulfillment</li>
            <li>Enhanced customer support and issue resolution</li>
            <li>Advanced SEO for improved organic visibility</li>
            <li>2 marketing campaigns per month</li>
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
            <li>Up to 100 products listed and optimized</li>
            <li>Advanced fulfillment strategy and logistics</li>
            <li>Priority support and customer retention</li>
            <li>Comprehensive SEO strategy and competitor analysis</li>
            <li>Customized campaigns and promotions</li>
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
    <Login service="Ecomerce" packageName={packageName} />
      <Footer/>
    </div>
  )
}

export default Ecommerce ;

