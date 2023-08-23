import React from "react";
import "./meet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Meet = () => {
  const meet = [
    {
      id: 1,
      Name: "Er. Bhawesh Kafle",
      img: "./assets/Team/bhawesh.png",
      post: " Operation Manager ",
    },
    
    {
      id: 2,
      Name: "Nabin Maharjan",
      img: "./assets/Team/nabin.png",
      post: "Engineer",
    },
    {
      id: 3,
      Name: "Nikesh Pyakurel",
      img: "./assets/Team/nikish.png",
      post: "Full Stack Developer",
    },
    {
      id: 4,
      Name: "Rahul Khanal",
      img: "./assets/Team/rahul.jpg",
      post: "Backend Developer",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="Meet">
      <h1>Our Team</h1>
      <div className="meet">
        <Slider {...settings}>
          {meet.map((member, index) => {
            return (
              <div className="center-card" key={index}>
                <img src={member.img} alt={member.Name} />
                <div className="team-member-info">
                  <h3>{member.Name}</h3>
                  <p>{member.post}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Meet;
