import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./main";
import Inspiration from "./components/Inspiration";
// import NavBar from "./components/NavBar_1";
// import ProductList from "./components/ProductList";
// import Modal from "./components/Modal";
// import About from "./components/About_1";
// import Contact from "./components/Contact";
// import Inspiration from "./components/Inspiration";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {/* <About /> */}

        {/* <Switch> */}
        {/* <Route path="/" component={ProductList} exact /> */}
        {/* <Route path="/details" component={Details} /> */}
        {/* <Route path="/cart" component={Cart} /> */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/contact" component={Contact} /> */}
        {/* <Route component={ProductList} /> */}
        {/* </Switch> */}
        {/* <ProductList /> */}
        {/* <Contact /> */}
        {/* <Modal /> */}
        <Switch>
          <Route path="/inspiration" component={Inspiration} />
          <Route path="/" component={Main} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
