import React, { Component } from "react";
import styled from "styled-components";
import { ProdConsumer } from "../Context";
import Button from "./Button";


export default class Modal extends Component {
  render() {
    return (
      <ProdConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price, description } = value.modalProduct;
          if (!modalOpen) {
            return;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">

                      <div id="modal" className="pc-div">
                        <img src={img} className="img" alt="product" />
                        <div className="title">
                        <h5>{title}</h5>
                        <br></br>
                          <h5 className="text-muted text">
                            price: DKK {price}
                          </h5>
                        </div>
                        <p className="description">{description}</p>
                        <div className="btn-container">
                          <Button
                            onClick={() => closeModal()}
                            className="shopping"
                          >
                            continue shopping
                          </Button>

                          <a href="#contact">
                            <Button
                              onClick={() => closeModal()}
                              className="cart"
                            >
                              Place an Order
                            </Button>
                          </a>
                        </div>
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
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  #modal {
    background-color: var(--main);
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    padding: 3rem 0 3rem 0;
  }
  .img {
    float: left;
    width: 50%;
    padding: 1.5rem;
  }

  .description {
    padding: 1.5rem;
  }

  .title {
    margin-top: 2rem;
    padding-right: 1.5rem;
  }

  .shopping:hover,
  .cart:hover {
    color: var(--mainBrown);
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
  }
`;
