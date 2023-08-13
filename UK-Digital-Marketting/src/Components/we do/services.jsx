import React from "react";
import arrowImg from "../../assets/arrow.png";
import dataImg from "../../assets/chart.png";
import mobileImg from "../../assets/cell.png";
import socialimg from "../../assets/social-media.png";
import seoImg from "../../assets/partners/seo-01.png";
import mobileMarketing from "../../assets/partners/mobile-media-01.png";
import socialMarketing from "../../assets/partners/social-media-01.png";
import contentMarketing from "../../assets/partners/content-media-01.png";
const Services = () => {
  return (
    <div className="services" id="services" data-aos="flip-right">
      <h1>What We Do ?</h1>
      <p>
        we prioritize customer satisfaction, timely delivery, and exceeding
        expectations
      </p>
      {/* <div className="service-main">
        <article>
          <div className="Services-img">
            <img src={arrowImg} alt="" srcset="" />
          </div>
          <div>
            <b>Search Engine Marketing</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit.
            </span>
          </div>
        </article>
        <article>
          <div className="Services-img">
            <img src={dataImg} alt="" srcset="" />
          </div>
          <div>
            <b>Data Sciance & Analytics</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit. Nam
              Pellentisque Justo Ligla.
            </span>
          </div>
        </article>
        <article>
          <div className="Services-img">
            <img src={mobileImg} alt="" srcset="" />
          </div>
          <div>
            <b>Mobile Marketing</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit.
            </span>
          </div>
        </article>
        <article>
          <div className="Services-img">
            <img src={arrowImg} alt="" srcset="" />
          </div>
          <div>
            <b>Content Marketing</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit. Nam
              Pellentisque Justo Ligla.{" "}
            </span>
          </div>
        </article>
        <article>
          <div className="Services-img">
            <img src={dataImg} alt="" srcset="" />
          </div>
          <div>
            <b>Engagement Marketing</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit.
            </span>
          </div>
        </article>
        <article>
          <div className="Services-img">
            <img src={socialimg} alt="" srcset="" />
          </div>
          <div>
            <b>Social Media Marketing</b>
            <br />
            <span>
              Lorem ipsum coloe sir amet, consect, etru adipicing elit. Nam
              Pellentisque Justo Ligla.
            </span>
          </div>
        </article>
      </div> */}
      <div className="service-main">
        <article>
          <div className="servicesImg" >
            <img src={seoImg} alt="" srcset="" width={"50%"} />
          </div>
          <div>
            <h2>Search Engine Optimization</h2>
            <span>
              We excel in SEO, driving targeted traffic through keyword
              research, content optimization, link building, and technical
              enhancements. Our strategies boost search rankings, attract
              organic traffic, and drive business growth.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg" >
            <img src={mobileMarketing} alt="" srcset="" width={"30%"} />
          </div>
          <div>
            <h2>Mobile Marketing</h2>
            <span>
              Mobile marketing targets users on smartphones and tablets through
              channels like mobile websites, apps, SMS, and location-based
              marketing. It maximizes reach, engagement, and conversions by
              leveraging the personal and ubiquitous nature of mobile devices.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg" >
            <img src={socialMarketing} alt="" srcset="" width={"30%"} />
          </div>
          <div>
            <h2>Social Media Marketing</h2>
            <span>
              Social media marketing utilizes platforms like Facebook,
              Instagram, and Twitter to promote brands, engage audiences, and
              drive website traffic. It leverages interactivity and broad reach
              to build communities and boost brand visibility.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
        <article>
          <div className="servicesImg" >
            <img src={contentMarketing} alt="" srcset="" width={"70%"} />
          </div>
          <div>
            <h2>Content Marketing</h2>
            <span>
              Content marketing creates and distributes valuable content to
              engage and attract audiences. It builds brand awareness,
              credibility, and relationships through informative and
              entertaining content, driving profitable customer actions.
            </span>
          </div>
          {/* <button>Contact</button> */}
        </article>
      </div>
      {/* <button>Get In Touch Today</button> */}
    </div>
  );
};

export default Services;
