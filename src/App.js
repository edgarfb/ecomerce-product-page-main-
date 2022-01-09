import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SneakersDescription from "./components/SneakersDescription";

import Cart from "./components/Cart";
import MobileMenu from "./components/MobileMenu";
import { useSelector } from "react-redux";

function App() {
  const menuActived = useSelector((state) => state.menu.active);
  return (
    <div className="App">
      {menuActived && <MobileMenu />}
      <Navbar />
      <Slider></Slider>
      <Cart />
      <SneakersDescription></SneakersDescription>
    </div>
  );
}

export default App;
