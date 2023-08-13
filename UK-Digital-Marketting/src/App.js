import { Route } from "react-router-dom";
import "./App.css";
import Banner from "./Components/Banners/bnner";
import Messageceo from "./Components/Ceo message/Messageceo";
import Login from "./Components/Login/login";
import Meet from "./Components/Meet Our team/meet";
import Navigation from "./Components/Navigation/navigation";
import TeamCarousel from "./Components/Our Team/team";
import Request from "./Components/Request Quote/request";
import Chat from "./Components/chat/chat";
import Footer from "./Components/footer/footer";
import Mission from "./Components/mission/mission";
import Client from "./Components/our client/client";
import Pricing from "./Components/pricing/pricing";
import Services from "./Components/we do/services";
import randomimg from "./assets/random.png";
import SocialmediaMarketing from "./Social Media Marketing/SocialmediaMarketing";

function App() {
  return (
    <section className="App">
      <Navigation />
      <Banner />
      <Login />
      <Services />
      <Mission />
      <Pricing />
      <Messageceo />
      

      {/* <img src={randomimg} alt="" style={{ width: "100vw", height: "50vh" }} /> */}
      {/* <Client /> */}
      <Request />
      <TeamCarousel />
      <Meet />
      <Footer />
      {/* <Chat /> */}
     
    </section>
  );
}

export default App;
