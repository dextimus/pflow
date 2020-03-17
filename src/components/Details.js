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
                  <h5 className="text-capitalize mt-3 mb-0 font-weight-bold">
                    product description:
                  </h5>
                  <p className="text-muted lead">{description}</p>
                  <h5 className="text-dark">
                    <strong>
                      Price: <span>DKK</span>
                      {price}
                    </strong>
                  </h5>

                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <Button className="btn-product">back to products</Button>
                    </Link>
                    <Button
                      className="btn-product"
                      disabled={inCart ? true : false}
                      cart
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
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
