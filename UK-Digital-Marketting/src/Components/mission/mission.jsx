import React from "react";
import missionimg from "../../assets/mission.png";
import mail from "../../assets/msg.png";

const Mission = () => {
  return (
    <div
      className="mission"
      data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    >
      <div className="left-mission">
        <h2>Our mission is clear</h2>
        <br />
        <span>
          The highest quality marketing for every client, on every project.
        </span>
        <br />
        <p>
          We believe in providing personalized solutions that cater to your
          specific needs and objectives. We take the time to understand your
          business, target audience, and industry landscape.
        </p>
        <br />
        <div>
          <img src={mail} alt="" srcset="" /> Contact us for more info
        </div>
      </div>
      <img src={missionimg} alt="" width={""} />
    </div>
  );
};

export default Mission;
