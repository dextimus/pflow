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
        <div className="click">
          <p>Click image for details</p>
        </div>
        <ProdConsumer>
          {value => (
            <div
              className="img-container"
              onClick={() => {
                value.details(id);
              }}
            >
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
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
          <p className="align-self-center">{title}</p>
          <h5>
            <span className="mr-1">DKK</span>
            {price}
          </h5>
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
  .img-container {
    border: none;
    transition: all 0.3s linear;
    position: relative;
    overflow: hidden;
  }
  .card-footer {
    padding: 10px 20px 0 20px;
    background-color: transparent;
    border-color: transparent;
    color: transparent;
    transition: all 0.5s linear;
  }

  &:hover {
    .img-container {
      box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }
    .card-footer {
      color: var(--mainBrown);
      background-color: var(--mainWhite);
      transform: translateY(-85%);
    }
    .cart-btn {
      transform: translate(0, -300%);
    }
    .click {
      color: var(--mainRed);
    }
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 1rem;
    border: none;
    border-radius: 5px 0 0 5px;
    background: var(--mainRed);
    color: var(--mainWhite);
    transform: translate(100%, -300%);
    transition: all 0.5s linear;
  }

  .cart-btn:hover {
    background: var(--lightBrown);
    color: var(--mainGreen);
  }

  .cart-btn:focus {
    outline: none;
  }

  .click {
    color: transparent;
    transform: translateY(50%);
    transition: all 0.5s linear;
  }
`;
