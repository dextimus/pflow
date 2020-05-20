import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Menu extends Component {
  state = {
    showMenu: false,
  };

  showMenu = this.showMenu.bind(this);
  closeMenu = this.closeMenu.bind(this);

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }

  render() {
    return (
      <MenuWrapper>
        <div className="menuBar">
          <img
            src="../img/bars.png"
            alt="menu"
            height="40px"
            onClick={this.showMenu}
          ></img>

          {this.state.showMenu ? (
            <div
              className="menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <Link to="/inspiration">Inspiration</Link>
              <a href="#main">Selection</a>
              <a href="#contact">Contact</a>
              <a href="#about">Home</a>
            </div>
          ) : null}
        </div>
      </MenuWrapper>
    );
  }
}

export default Menu;

const MenuWrapper = styled.div`
  .menuBar {
    cursor: pointer;
    position: relative;
    display: inline-block;
    float: right;
  }

  .menu {
    display: none;
    right: 0;
    position: absolute;
    min-width: 120px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .menu a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 12px 16px;
    background-color: black;
  }

  .menu a:hover {
    background-color: grey;
  }

  .menuBar:hover .menu {
    display: block;
  }
`;
