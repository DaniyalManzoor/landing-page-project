import React from "react";
import ShowCase from "./components/showcase";
import NavBar from "./components/navBar";
import AboutUs from "./components/aboutUs";
import Services from "./components/servies";
import Team from "./components/teamSection";
import FadeIn from "react-reveal";
import "./App.css";
import Testimonial from "./components/testimonial";
import Price from "./components/priceSection";
import Contact from "./components/contactSection";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <NavBar />
      <ShowCase />
      <FadeIn>
        <AboutUs />
      </FadeIn>
      <Services />
      <FadeIn>
        <Team />
      </FadeIn>
      <Price />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
