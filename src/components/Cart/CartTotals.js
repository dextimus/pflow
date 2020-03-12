import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

export default function CartTotals({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-3"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal : DKK </span>
              <strong>{cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax : DKK </span>
              <strong>{cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total : DKK </span>
              <strong>{cartTotal}</strong>
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8  text-right">
            <h3 className="font-italic font-weight-bold">Go to checkout:</h3>
            <Link to="/contact">
              <Button pay>
                <img src="../img/paypal.png" alt="paypal" title="PayPal" />
              </Button>
              <Button pay>
                <img
                  src="../img/MobilePay.png"
                  alt="MobilePay"
                  title="MobilePay"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
