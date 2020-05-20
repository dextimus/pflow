import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu_1";

class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top px-5">
        <img src="../img/Group 40.png " alt="logo" width="60px" />
        <div style={{ margin: "auto" }}>
          <p className="text">
            We make handmade home interior items from concrete
          </p>
        </div>

        <Menu />
      </NavWrapper>
    );
  }
}
export default NavBar;

const NavWrapper = styled.nav`
  background-color: rgb(0, 0, 0);
  background-image: url(http://www.zingerbugimages.com/backgrounds/white_marble_background_seamless.jpg);
  background-position: top left;
  background-repeat: repeat;
  background-attachment: fixed;
  height: 80px;
  filter: brightness(95%);
  width: 98%;
  margin: auto;
  .nav-link {
    color: var(--mainBrown) !important;
    font-size: 1.5rem;
  }
  & a:hover {
    color: var(--mainWhite) !important;
    transform: translateY(2px);
  }

  .text {
    font-size: 1.5rem;
    padding-left: 5rem;
  }

  @media screen and (max-width: 900px) {
    .text {
      font-size: 1rem;
      padding-left: 4rem;
    }
  }

  @media screen and (max-width: 700px) {
    .text {
      font-size: 0.6rem;
      padding-left: 3rem;
    }
  }
  @media screen and (max-width: 550px) {
    .text {
      font-size: 0.4rem;
      padding-left: 0.8rem;
    }
  }
  @media screen and (max-width: 370px) {
    .text {
      font-size: 0.3rem;
      padding-left: 0.5rem;
    }
    img {
      width: 40px;
    }
  }
`;
