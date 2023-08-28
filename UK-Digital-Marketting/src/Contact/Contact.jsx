import React from "react";
import "./Contact.css";
import Navigation from "../Components/Navigation/navigation";
import Footer from "../Components/footer/footer";
import { BiPhone } from "react-icons/bi";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { FaEnvelopeOpenText } from "react-icons/fa";
const Contact = () => {
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
          <form action="" id="cotactform">
            <div>
              <h1 className="head"> Feel Free to contact us</h1>
              {/* <p> If you have any queries </p> */}
            </div>
            <div className="contactFormRow">
              <input
                type="text"
                name="fname"
                id="name"
                placeholder="Name eg.(Niall)"
              ></input>
              <input
                type="text"
                name="fname"
                id="name"
                placeholder="Surename eg.(Horan)"
              ></input>
            </div>
            <div className="contactFormRow">
              <input
                type="text"
                name="email"
                id="name"
                placeholder="Email eg.(abc@gmail.com)"
              ></input>
              <input
                type="text"
                name="cname"
                id="name"
                placeholder="Company Name eg.(meta)"
              ></input>
            </div>
            <div className="contactFormRow">
              <input
                type="number"
                name="pnumber"
                id="name"
                placeholder="Contact eg.(+44-7659834067)"
              ></input>
              <input
                type="text"
                name="pass"
                id="name"
                placeholder="Address eg.(London)"
              ></input>
            </div>
            <div className="contactFormRow">
              <textarea id="text" placeholder="Message"></textarea>
            </div>
            <div className="contactFormRow">
              <button id="form"> Submit </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
