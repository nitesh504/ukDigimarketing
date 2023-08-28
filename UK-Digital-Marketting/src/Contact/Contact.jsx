import React, { useState } from "react";
import "./Contact.css";
import Navigation from "../Components/Navigation/navigation";
import Footer from "../Components/footer/footer";
import { BiPhone } from "react-icons/bi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
import emailjs from "emailjs-com";
import axios from "axios";

const Contact = () => {
  const [disable, setDisable] = useState(false);
  const [data, setData] = useState({
    name: "",
    nationality: "",
    email: "",
    company: "",
    contact: "",
    address: "",
    message: "",
  });
  function handleSubmit(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const serviceId = "YOUR_EMAILJS_SERVICE_ID";
  //     const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
  //     const userId = "YOUR_EMAILJS_USER_ID";

  //     emailjs.sendForm(serviceId, templateId, e.target, userId).then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //     e.target.reset();
  //   };

  async function handleDataSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.company || !data.email) {
      return alert("Please provide value");
    }
    try {
      setDisable(true);
      await axios.post(
        "https://script.google.com/macros/s/AKfycbxdMNnBcHnK1AxNYuZ60r11yz3DOTNRGgQZb73aFU5cuhQEvUWGmluSBhcP2vc71pK3/exec?action=addUser5",
        data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      alert("Your data is recorded successfully");
      window.location.reload();
      setDisable(false);
    } catch (e) {
      setDisable(false);
      console.error("Error occurred while submitting:", e.message);
      alert("Error occurred while submitting");
    }
  }
  return (
    <>
      <Navigation />
      <div className="whole">
        <div className="left">
          <div className="contact">
            <FaEnvelopeOpenText size={50} color="#B9001F"></FaEnvelopeOpenText>
            <h1 className="one">Contact Info</h1>
          </div>
          <div className="phone">
            <div>
              <BiPhone
                size={30}
                color="#B9001F"
                className="contacticon"
              ></BiPhone>
            </div>
            <div>
              <p>
                Phone Number<br></br>+44 7590612196
              </p>
            </div>
          </div>
          <div className="phone">
            <div>
              <FiMapPin
                size={30}
                color="#B9001F"
                className="contacticon"
              ></FiMapPin>
            </div>
            <div>
              <p>
                Address<br></br>69 Aldwick Road
              </p>
            </div>
          </div>
          <div className="phone">
            <div>
              <BsFillEnvelopeAtFill
                size={30}
                color="#B9001F"
                className="contacticon"
              ></BsFillEnvelopeAtFill>
            </div>
            <div>
              <p>
                Email<br></br>hr@uksmm.com
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <form id="cotactform">
            <div>
              <h1 className="head"> Feel Free to contact us</h1>
            </div>
            <div className="contactFormRow">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name eg.(Niall)"
                onChange={(e) => handleSubmit(e)}
              ></input>
              <input
                type="text"
                name="nationality"
                id="name"
                placeholder="Nationality eg.(UK)"
                onChange={(e) => handleSubmit(e)}
              ></input>
            </div>
            <div className="contactFormRow">
              <input
                type="text"
                name="email"
                id="name"
                placeholder="Email eg.(abc@gmail.com)"
                onChange={(e) => handleSubmit(e)}
              ></input>
              <input
                type="text"
                name="company"
                id="name"
                placeholder="Company Name eg.(meta)"
                onChange={(e) => handleSubmit(e)}
              ></input>
            </div>
            <div className="contactFormRow">
              <input
                type="number"
                name="contact"
                id="name"
                placeholder="Contact eg.(+44-7659834067)"
                onChange={(e) => handleSubmit(e)}
              ></input>
              <input
                type="text"
                name="address"
                id="name"
                placeholder="Address eg.(London)"
                onChange={(e) => handleSubmit(e)}
              ></input>
            </div>
            <div className="contactFormRow">
              <textarea
                id="text"
                name="message"
                placeholder="Message"
                onChange={(e) => handleSubmit(e)}
              ></textarea>
            </div>
            <div className="contactFormRow">
              <button
                typeof="submit"
                onClick={handleDataSubmit}
                className="formBtn"
                disabled={disable ? true : false}
              >
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
