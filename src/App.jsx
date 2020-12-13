import React from "react";
import Header from "./components/Header/Header";
import Cv from "./components/Cv/Cv";
import SocialNetworks from "./components/SocialNetworks/SocialNetworks";
import "./css/App.css";

const App = () => {
  return (
    <>
      <Header />
      <Cv />
      <SocialNetworks />
    </>
  );
};

export default App;
