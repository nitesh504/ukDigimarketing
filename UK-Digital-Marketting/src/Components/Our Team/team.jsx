// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const TeamCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const teamMembers = [
//     {
//       name: "John Doe",
//       position: "CEO",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Manager",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Manager",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//     {
//       name: "John Doe",
//       position: "CEO",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Manager",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//     {
//       name: "Jane Smith",
//       position: "Manager",
//       photo: "/assets/member.jpg",
//       para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
//     },
//   ];

//   return (
//     <div className="team-slider">
//       <h1>Our Teams</h1>
//       <Slider {...settings}>
//         {teamMembers.map((member, index) => (
//           <center key={index} className="team-card">
//             <img
//               src={member.photo}
//               alt={member.name}
//               style={{ borderRadius: "50%" }}
//             />
//             <h3>{member.name}</h3>
//             <p>{member.position}</p>
//             <p style={{ color: "#8A93A0" }}>{member.para}</p>
//           </center>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TeamCarousel;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import img from "./sailesh.jpeg"

const TeamCarousel = () => {
  return (
    <div className="messege">
      <div className="messege-card">
        <div className="messege-card-left">
          <img src={img} alt="" srcset="" />
          <span>
            <a href="https://www.facebook.com/sailesh.lion">
              <BsFacebook
                size={25}
                className="fa-icon"
                href="https://www.facebook.com/sailesh.lion"
              />
            </a>
            <a href="https://www.instagram.com/sailesh_7maharjan/">
              <BsInstagram
                size={25}
                className="fa-icon"
                href="https://www.instagram.com/sailesh_7maharjan/"
              />
            </a>
            <a href="https://www.linkedin.com/company/digital-pravidhi/">
              <BsLinkedin
                size={25}
                className="fa-icon"
                href="https://www.linkedin.com/company/digital-pravidhi/"
              />
            </a>
          </span>
        </div>
        <div className="messege-card-right" data-aos="zoom-out">
          <h1>Sailesh Maharjan</h1>
          <h2 style={{ color: "#b9001f" }}>CTO / HR Manager</h2>
          <div className="messege-card-right-article">
            <RiDoubleQuotesL
              size={52}
              color="#b9001f"
              className="upper-quote"
            />
            <p style={{ color: "#000" }}>
              Elevate Your Digital Presence: Empower Your Brand's Success with
              the Dynamic Energy of Our SEO Team. Harness the Potential of
              Organic Traffic, Outshine Competitors, and Amplify Conversions.
              Trust Our Proven Expertise, Tailored Strategies, and Passionate
              Team to Propel Your Business Beyond Expectations. Choose SEO
              Excellence and Unleash Your Online Success Story Today!
            </p>
            <RiDoubleQuotesR
              size={52}
              color="#b9001f"
              alig
              className="lower-quote"
            />
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default TeamCarousel;
