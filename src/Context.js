import React, { Component } from "react";
import { productsContainer, productDetails } from "./Data";

const ProductContext = React.createContext();
// Provider
// Consumer

class ProdProvider extends Component {
  state = {
    products: [],
    productDetails: productDetails,
    cart: [],
    modalOpen: false,
    modalProduct: productDetails
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    productsContainer.forEach(prod => {
      const singleProd = { ...prod };
      products = [...products, singleProd];
    });
    this.setState(() => {
      return { products: products };
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  detailsHandler = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };

  addToCartHandler = id => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          details: this.detailsHandler,
          addToCart: this.addToCartHandler,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProdConsumer = ProductContext.Consumer;

export { ProdProvider, ProdConsumer };
