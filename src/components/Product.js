import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProdConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProdWrapper className="col-9 mx-auto col-md-4 col-lg-4 my-4">
        <div className="card">
          <ProdConsumer>
            {value => (
              <div
                className="img-container"
                style={{ paddingBottom: "1rem" }}
                onClick={() => {
                  value.details(id);
                }}
              >
                <Link to="/details">
                  <img src={img} alt="product" className="card-img-top pb-4" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {inCart ? (
                    <p
                      className="text-capitalize mb-0"
                      disabled
                      style={{ cursor: "no-drop" }}
                    >
                      {" "}
                      in cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProdConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-brown mb-0">
              <span className="mr-1">DKK</span>
              {price}
            </h5>
          </div>
        </div>
      </ProdWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    inCart: PropTypes.bool,
    count: PropTypes.number,
    total: PropTypes.number
  }).isRequired
};

const ProdWrapper = styled.div`
  .card {
    border: none;
    transition: all 0.3s linear;
  }

  .card-footer {
    background-color: transparent;
    border-color: transparent;
  }

  &:hover {
    .card {
      box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.1);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 1rem;
    border: none;
    border-radius: 5px 0 0 0;
    background: var(--brown2);
    color: var(--mainWhite);
    transform: translate(100%, 0);
    transition: all 0.5s linear;
  }

  .card:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    background: var(--lightBrown);
    color: var(--mainGreen);
  }

  .cart-btn:focus {
    outline: none;
  }
`;
