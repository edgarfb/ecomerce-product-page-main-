import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SneakersDescription from "./components/SneakersDescription";
import Amount from "./components/Amount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider></Slider>
      <SneakersDescription />
      <Amount />
    </div>
  );
}

export default App;
