import React, { Component } from "react";
import styled from "styled-components";
import { ProdConsumer } from "../Context";
import Button from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProdConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>Item added to the cart</h5>
                      <img src={img} className="img-fluid img" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted text">price: DKK {price}</h5>
                      <Link to="/">
                        <Button onClick={() => closeModal()} className="text">
                          continue shopping
                        </Button>
                      </Link>
                      <Link to="/cart">
                        <Button onClick={() => closeModal()} cart>
                          go to the cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProdConsumer>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justyfy-content: center;
  #modal {
    background: var(--mainWhite);
  }
  .img {
    margin: 1.5rem 0 2rem 0;
  }
  .text {
    margin-bottom: 2rem;
    // margin-right: 10px;
  }
`;
