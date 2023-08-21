import React, { useEffect, useState } from "react";
import seoimg from "../../assets/seo.png";
import axios from "axios";

const Login = ({ service, packageName }) => {
  const [packageValue, setPackageValue] = useState(packageName);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    website: "",
    service: service,
    // package: packageValue,
  });
  function handleSubmit(e) {
    if (e.target.name === "package") {
      setPackageValue(e.target.value);
      setData({ ...data, [e.target.name]: e.target.value });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  }
  const [arr, setArr] = useState(["basic", "standard", "premium"]);
  useEffect(() => {
    if (packageName === "Basic") {
      setArr(["Basic", "Standard", "Premium"]);
      setPackageValue("Basic");
    } else if (packageName === "Standard") {
      setArr(["Standard", "Basic", "Premium"]);
      setPackageValue("Standard");
    } else {
      setArr(["Premium", "Standard", "Basic"]);
      setPackageValue("Premium");
    }
    setData({ ...data, package: packageName });
  }, [packageName]);
  async function handleDataSubmit(e) {
    e.preventDefault();
    await setData({ ...data, package: packageValue });
    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbwCUCn43aSpIKwagpnzXndUmXc_xEkw5o9luu74V2oLzeho5LP8dLzgWf6Rg7LPPVAn/exec?action=addUser4",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Your data is recorded successfully");
      window.location.reload();
    } catch (e) {
      console.error("Error occurred while submitting:", e.message);
      alert("Error occurred while submitting");
    }
  }
  return (
    <div className="login-container" id="contact" data-aos="zoom-in-left">
      <div className="form-Left">
        <img src={seoimg} width="50%" alt="" srcSet="" />
        <h2>marekting for every one</h2>
        <span>
          Worldwide we help businesses gain more leads and brands awareness by
          reassessing and improving their online presence. We provide unique{" "}
          <span>web design</span> combined with and extensive{" "}
          <span>Search engine ospantimization, online advertising</span> and{" "}
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
          <select name="package" id="package" onChange={(e) => handleSubmit(e)}>
            {arr.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
          <br />
          <input type="submit" value="Get Free Report" />
        </div>
      </form>
    </div>
  );
};

export default Login;
