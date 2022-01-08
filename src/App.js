import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SneakersDescription from "./components/SneakersDescription";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider></Slider>
      <SneakersDescription />
    </div>
  );
}

export default App;
