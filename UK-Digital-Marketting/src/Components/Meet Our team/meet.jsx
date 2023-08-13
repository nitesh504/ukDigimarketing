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
      post: " Project Manager",
    },
    {
      id: 2,
      Name: "Er. Atul Verma",
      img: "./assets/Team/atul.png",
      post: "Product Manager",
    },
    {
      id: 3,
      Name: "Nabin Maharjan",
      img: "./assets/Team/nabin.png",
      post: "Marketing Manager",
    },
    {
      id: 4,
      Name: "Sulav Paudel",
      img: "./assets/Team/sulav.png",
      post: "Senior SEO Expert",
    },
    {
      id: 5,
      Name: "Anush Khadka",
      img: "./assets/Team/anush.png",
      post: "Junior SEO Expert",
    },
    {
      id: 6,
      Name: "Rubin lama",
      img: "./assets/Team/rubin.png",
      post: "Graphic Designer",
    },
    {
      id: 7,
      Name: "Nikesh Pyakurel",
      img: "./assets/Team/nikish.png",
      post: "Full Stack Developer",
    },
    {
      id: 8,
      Name: "Bhawana Rijal",
      img: "./assets/Team/bhawana.png",
      post: "Marketing Executive",
    },
    {
      id: 10,
      Name: "Nitesh Dulal",
      img: "./assets/Team/nitesh.jpg",
      post: "Frontend Developer",
    },
    {
      id: 9,
      Name: "Rahul Khanal",
      img: "./assets/Team/rahul.jpg",
      post: "Backend Developer",
    },
    {
      id: 11,
      Name: "Laxman Adhikari",
      img: "./assets/Team/laxman.png",
      post: "Mobile Developer",
    },
    {
      id: 12,
      Name: "Raman Karki",
      img: "./assets/Team/raman.png",
      post: "Content Writer",
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
