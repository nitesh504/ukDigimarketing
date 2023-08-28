import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import SocialmediaMarketing from "./Social Media Marketing/SocialmediaMarketing";
import Graphicsdesign from "./Graphicsdesign/Graphicsdesign";
import Facebookboosting from "./Facebookboosting/Facebookboosting";
import Websitedesign from "./Websitedesign/Websitedesign";
import Digitalmarketing from "./Digitalmarketing/Digitalmarketing";
import Contentmarketing from "./Contentmarketing/Contentmarketing";
import Socialmediamanagement from "./Socialmediamanagement/Socialmediamanagement";
import Ecommerce from "./Ecommerce/Ecommerce";
import Videoediting from "./Videoediting/Videoediting";
import Googlemap from "./Googlemap/Googlemap";
import Seo from "./SEO/Seo";
import Emailmarketing from "./Emailmarketing/Emailmarketing";
import Payperclick from "./Payperclick/Payperclick";
import Socialmediainfluencer from "./Socialmediainfluencer/Socialmediainfluencer";
import Webmaintain from "./Webmaintain/Webmaintain";
import Contentwriting from "./Contentwriting/Contentwriting";
import Privacy from "./privacy policy/Privacy";
import Contact from "./Contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
AOS.init({
  duration: 1200,
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/socialmediamarketing"
          element={<SocialmediaMarketing />}
        />
        <Route path="/graphicsdesigns" element={<Graphicsdesign />} />
        <Route path="/facebookboosting" element={<Facebookboosting />} />
        <Route path="/websitedesign" element={<Websitedesign />} />
        <Route path="/digitalmarketing" element={<Digitalmarketing />} />
        <Route path="/contentwriting" element={<Contentwriting />} />
        <Route
          path="/socialmediamanagement"
          element={<Socialmediamanagement />}
        />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/videoediting" element={<Videoediting />} />
        <Route path="/mapseo" element={<Googlemap />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/emailmarketing" element={<Emailmarketing />} />
        <Route path="/payperclick" element={<Payperclick />} />
        <Route
          path="/socialmediainfluencer"
          element={<Socialmediainfluencer />}
        />
        <Route path="/contentmarketing" element={<Contentmarketing />} />
        <Route path="/websitemanagement" element={<Webmaintain />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
