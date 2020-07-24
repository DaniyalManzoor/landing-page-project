import React from "react";
import ShowCase from "./components/showcase";
import NavBar from "./components/navBar";
import AboutUs from "./components/aboutUs";
import Services from "./components/servies";
import Team from "./components/teamSection";
import FadeOut from "react-reveal";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ShowCase />
      <FadeOut>
        <AboutUs />
      </FadeOut>
      <Services />
      <FadeOut>
        <Team />
      </FadeOut>
    </>
  );
};

export default App;
