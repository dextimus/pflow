import React, { Component } from "react";
import styled from "styled-components";
import { ProdConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, img, title } = this.props.product;
    return (
      <ProdWrapper className="col-9 mx-auto col-md-4 col-lg-4 my-4">
        <ProdConsumer>
          {(value) => {
            return (
              <div>
                <div
                  className="img-container"
                  onClick={() => {
                    value.details(id);
                  }}
                >
                  <img src={img} alt="product" className="card-img-top" />
                </div>
                <div
                  className="card-footer d-flex justify-content-center"
                  onClick={() => {
                    value.openModal(id);
                  }}
                >
                  <p style={{ marginBottom: 0}}>
                    quick view
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <p>{title}</p>
                </div>
              </div>
            );
          }}
        </ProdConsumer>
      </ProdWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
  }).isRequired,
};

const ProdWrapper = styled.div`
  .img-container {
    border: none;
    transition: all 0.3s linear;
    position: relative;
    overflow: hidden;
  }
  .card-footer {
    width: 100%;
    padding: 0 10px 0 10px;
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
      color: black;
      background-color: var(--mainWhite);
      opacity: 0.6;
      transform: translateY(-70%) scale(1.05);
      cursor: pointer;
    }
`;
