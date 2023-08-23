import React, { useState } from "react";
import seoimg from "../../assets/seo.png";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    website: "",
  });
  function handleSubmit(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  async function handleDataSubmit(e) {
    e.preventDefault();
    console.log(data);
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbyXUGLNXVPZIAbRFmpE7N_daeMHWoMrkDKNjsxNYxdmia61EgFlLPU7t0ji6aARtUkd/exec?action=addUser3",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      window.location.reload();
    } catch (e) {
      console.error("Error occurred while submitting:", e.message);
      alert("Error occurred while submitting");
    }
  }
  return (
    <div className="login-container" id="contact" data-aos="zoom-in-left">
      <div className="form-Left">
        <img src={seoimg} width="50%" alt="" srcset="" />
        <h2>marekting for every one</h2>
        <span>
          Worldwide we help businesses gain more leads and brands awareness by
          reassessing and improving their online presence. We provide unique{" "}
          <span>web design</span> combined with and extensive{" "}
          <span>Search engine optimization, online advertising</span> and{" "}
          <span>content strategy</span> to ensure business growth.
        </span>
      </div>
      <form onSubmit={(e) => handleDataSubmit(e)}>
        <div className="formHead">
          <h2>Request a quote</h2>
        </div>
        <div className="formBody">
          <input
            type="text"
            name="name"
            placeholder="Full Name*"
            id=""
            onChange={(e) => handleSubmit(e)}
          />
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email*"
            onChange={(e) => handleSubmit(e)}
          />
          <br />
          <input
            type="tel"
            name="contact"
            id=""
            placeholder="Phone*"
            onChange={(e) => handleSubmit(e)}
          />
          <br />
          <input
            type="text"
            name="company"
            id=""
            placeholder="Company Name*"
            onChange={(e) => handleSubmit(e)}
          />
          <br />
          <input
            type="text"
            name="website"
            id=""
            placeholder="Website*"
            onChange={(e) => handleSubmit(e)}
          />
          <br />
          <input type="submit" name="" id="" value="Get Free Report" />
        </div>
      </form>
    </div>
  );
};

export default Login;
