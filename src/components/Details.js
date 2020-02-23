import React, { Component } from "react";
import { ProdConsumer } from "../Context";
import { Link } from "react-router-dom";
import Button from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProdConsumer>
        {value => {
          const {
            id,
            title,
            img,
            price,
            description,
            inCart
          } = value.productDetails;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-brown my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4 className="text-dark">
                    <strong>
                      Price: <span>DKK</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                    product description:
                  </p>
                  <p className="text-muted lead">{description}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <Button style={{ marginRight: "10px" }}>
                        back to products
                      </Button>
                    </Link>
                    <Button
                      disabled={inCart ? true : false}
                      cart
                      // style={{ cursor: "no-drop" }}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProdConsumer>
    );
  }
}
