import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Scroll from "./components/Scroll";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Scroll>
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
        </Scroll>
        <Modal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
