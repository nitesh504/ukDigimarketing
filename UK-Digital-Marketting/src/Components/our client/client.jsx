import React from "react";
import facebookLogo from "../../assets/partners/google.png";
import openAI from "../../assets/partners/openai.png";
import DigitalPravidhi from "../../assets/partners/dp.png";

const Client = () => {
  return (
    <div className="client">
      <h1>Our Clients</h1>
      <div className="client-imgs">
        <img src={facebookLogo} alt="" srcset="" />
        <img src={openAI} alt="" srcset="" />
        <img src={DigitalPravidhi} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Client;
