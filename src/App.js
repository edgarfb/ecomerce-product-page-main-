import React from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import SneakersDescription from "./components/SneakersDescription";
import SelectedGallery from "./components/SelectedGallery";

import MobileMenu from "./components/MobileMenu";
import { useSelector } from "react-redux";

const WrapperDesktop = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 70%;
    margin: 3rem auto;
  }
`;

function App() {
  const menuActived = useSelector((state) => state.menu.active);
  const products = useSelector((state) => state.products);
  const item = useSelector((state) => state.cart.item);

  console.log("products", products);
  console.log("item", item);
  return (
    <div className="App">
      {menuActived && <MobileMenu />}
      <Navbar></Navbar>
      <Slider></Slider>
      <WrapperDesktop>
        <SelectedGallery></SelectedGallery>
        <SneakersDescription
          name={products.name}
          description={products.description}
          discount={products.discount}
          price={products.price}
        ></SneakersDescription>
      </WrapperDesktop>
    </div>
  );
}

export default App;
