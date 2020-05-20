import React from "react";
import { inspiration } from "../Data";
import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import Footer from "./Footer";

const Inspiration = () => {
  return (
    <React.Fragment>
      <DivWrapper className="navbar fixed-top navbar-expand-sm px-5">
        <img src="../img/Group 40.png " alt="logo" width="60px" />
        <div style={{ marginLeft: "40%" }}>
          <p style={{ fontSize: "1.5rem" }}>Inspiration</p>
        </div>
        <Link to="/" className="ml-auto">
          <Button>Home</Button>
        </Link>
      </DivWrapper>
      <div className="img-container_2" style={{ paddingTop: "8rem" }}>
        <img
          src={inspiration.img_1}
          alt="insp"
          width="300rem"
          height="465rem"
          className="story"
        />
        <img
          src={inspiration.img_2}
          alt="insp"
          width="300rem"
          height="465rem"
          className="story"
        />
        <img
          src={inspiration.img_3}
          alt="insp"
          width="300rem"
          height="465rem"
          className="story"
        />
      </div>
      <div className="pic-div">
        <img
          src={inspiration.img_4}
          alt="insp"
          width="500rem"
          className="insp"
        />
        <div className="insp_descr">
          <p>{inspiration.descr_1}</p>
          <p>{inspiration.descr_2}</p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Inspiration;

const DivWrapper = styled.div`
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
`;
