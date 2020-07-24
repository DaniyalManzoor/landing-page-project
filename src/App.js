import React from "react";
import ShowCase from "./components/showcase";
import NavBar from "./components/navBar";
import AboutUs from "./components/aboutUs";
import Services from "./components/servies";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ShowCase />
      <AboutUs />
      <Services />
    </>
  );
};

export default App;
