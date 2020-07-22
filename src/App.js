import React from "react";
import ShowCase from "./components/showcase";
import NavBar from "./components/navBar";
import "./App.css";
import AboutUs from "./components/aboutUs";

const App = () => {
  return (
    <>
      <NavBar />
      <ShowCase />
      <AboutUs />
    </>
  );
};

export default App;
