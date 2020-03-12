import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProdConsumer } from "../Context";
import Footer from './Footer';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ paddingTop: "5rem" }}>
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProdConsumer>
                {val => {
                  return val.products.map(prod => {
                    return <Product key={prod.id} product={prod} />;
                  });
                }}
              </ProdConsumer>
            </div>
          </div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}
