import React,{useState} from 'react'
import Navigation from '../Components/Navigation/navigation'
import Login from '../Components/Login/login'
import Pricing from '../Components/pricing/pricing'
import ribbon from "../assets/ribbon.png";
import Footer from '../Components/footer/footer';
const Videoediting = () => {
  const [packageName, setPackageName] = useState("");
  return (
    <div>
      <Navigation/>
      <div className="Pricing" id="Pricing" data-aos="fade-up">
      <h1>Video Editing</h1>
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
             <li>Editing of up to 2 minutes of raw footage</li>
            <li>Standard transitions and basic effects</li>
            <li>Basic audio editing and background music</li>
            <li>Basic color correction and color grading</li>
            <li>Basic text and simple graphics</li>
            <li>Standard file formats and resolution</li>
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
            <li>Editing of up to 5 minutes of raw footage</li>
            <li>Enhanced transitions and visual effects</li>
            <li>Enhanced audio mixing and sound enhancement</li>
            <li>Advanced color grading and visual enhancements</li>
            <li>Enhanced text animations and graphic overlays</li>
            <li>High-quality file formats and delivery</li>
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
            <li>Editing of up to 10 minutes of raw footage</li>
            <li>Customized transitions and cinematic effects</li>
            <li>Custom audio design and voiceovers</li>
            <li>Customized color grading and visual style</li>
            <li>Customized motion graphics and animations</li>
            <li>Customized file formats and delivery options</li>
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
    <Login service="Video editing" packageName={packageName} />
      <Footer/>
    </div>
  )
}

export default Videoediting ;

