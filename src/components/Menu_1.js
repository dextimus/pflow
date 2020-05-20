import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Menu extends Component {
  state = {
    showMenu: false,
    active: false,
  };

  showMenu = this.showMenu.bind(this);
  closeMenu = this.closeMenu.bind(this);
  toggleBar = this.toggleBar.bind(this);

  toggleBar() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  showMenu() {
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
        <div
          className={this.state.active ? "change" : null}
          id="menuBar"
          onClick={() => {
            this.showMenu();
            this.toggleBar();
          }}
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>

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
  #menuBar {
    cursor: pointer;
    position: relative;
    display: inline-block;
    float: right;
  }

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 3px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 4px);
    transform: rotate(-45deg) translate(-8px, 4px);
    background-color: #990000;
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -6px);
    transform: rotate(45deg) translate(-8px, -6px);
    background-color: #990000;
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

  #menuBar:hover .menu {
    display: block;
  }
`;
