import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../email.png";
import Button from "./Button";
import styled from "styled-components";

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top navbar-expand-sm">
        <a href={"mailto:hello.pflow@gmail.com"}>
          <img src={Logo} alt="Logo" height="40rem" className="navbar-brand" />
        </a>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </Button>
        </Link>
      </NavWrapper>
    );
  }
}
export default NavBar;

const NavWrapper = styled.nav`
  background: var(--brown);
  .nav-link {
    color: var(--darkWhite) !important;
    font-size: 1.5rem;
  }
  & a:hover {
    color: var(--mainWhite) !important;
    transform: translateY(2px);
  }
`;
