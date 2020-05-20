import React, { Component } from "react";
import Product from "./Product";
import { ProdConsumer } from "../Context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main" id="main" style={{ paddingTop: "2rem" }}>
          <div className="container">
            <div className="row">
              <ProdConsumer>
                {(val) => {
                  return val.products.map((prod) => {
                    return <Product key={prod.id} product={prod} />;
                  });
                }}
              </ProdConsumer>
            </div>
          </div>
        </div>
        <div className="selection">
          <p className="selection-p">Contact</p>
        </div>
      </React.Fragment>
    );
  }
}
