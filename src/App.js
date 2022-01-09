import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SneakersDescription from "./components/SneakersDescription";
import Amount from "./components/Amount";
import AddToCartBtn from "./components/AddToCartBtn";
import PriceDisplayer from "./components/PriceDisplayer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider></Slider>
      <SneakersDescription />
      <PriceDisplayer />
      <Amount />
      <AddToCartBtn />
    </div>
  );
}

export default App;
