import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../email.png";

export default function Footer() {
  return (
    <FooterWrapper className="container">
      <ul className="list-inline mb-3">
        <Link to="/contact">
          <li className="list">
            <u>Payment and Shipping Info</u>
          </li>
        </Link>
      </ul>
      <div className="d-flex justify-content-center mb-3">
        <div>
          <img
            className="img-icon"
            src="../img/facebook-50.png"
            alt="facebook"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Facebook"
            onClick={() => openTab("facebook")}
          />

          <img
            className="img-icon"
            src="../img/instagram-50.png"
            alt="instagram"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Instagram"
            onClick={() => openTab("instagram")}
          />

          <a href={"mailto:hello.pflow@gmail.com"}>
            <img
              className="img-icon"
              src={Logo}
              alt="Logo"
              height="26px"
              title="mailto:"
            />
          </a>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: center;
  border-top: none;
  background: var(--mainWhite) !important;
  color: var(--mainBrown) !important;
  font-size: 10px !important;
`;

const openTab = icon => {
  if (icon === "facebook") {
    window.open("https://www.facebook.com/");
  } else if (icon === "instagram") {
    window.open("https://www.instagram.com/");
  }
};
