import React from "react";
import NavBar from "./components/NavBar_1";
import ProductList from "./components/ProductList";
import Modal from "./components/Modal";
import About from "./components/About_1";
import Contact from "./components/Contact";

const Main = () => {
  return (
    <div>
      <NavBar />
      <About />
      <ProductList />
      <Contact />
      <Modal />
    </div>
  );
};

export default Main;
