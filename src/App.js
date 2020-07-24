import React from "react";
import ShowCase from "./components/showcase";
import NavBar from "./components/navBar";
import AboutUs from "./components/aboutUs";
import Services from "./components/servies";
import Team from "./components/teamSection";
import Testimonial from "./components/testimonial";
import Price from "./components/priceSection";
import Contact from "./components/contactSection";
import Footer from "./components/footer";
import "./App.css";
import ScrollAnimation from "react-animate-on-scroll";

const App = () => {
  return (
    <>
      <NavBar />
      <ShowCase />
      <ScrollAnimation animateIn="fadeIn">
        <AboutUs />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Services />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Team />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Price />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Testimonial />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Contact />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default App;
