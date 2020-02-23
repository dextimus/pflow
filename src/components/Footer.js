import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper className="navbar px-sm-6">
      <ul className="list-inline mb-0" style={{ marginLeft: "4rem" }}>
        <li>Shipping info</li>
        <li>Payment info</li>
      </ul>

      <div style={{ marginRight: "4rem" }}>
        <Link onClick={() => openTab("facebook")}>
          <img
            src="../img/facebook-50.png"
            alt="facebook"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Facebook"
          />
        </Link>
        <Link onClick={() => openTab("twitter")}>
          <img
            src="../img/twitter-50.png"
            alt="twitter"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Twitter"
          />
        </Link>
        <Link Link onClick={() => openTab("instagram")}>
          <img
            src="../img/instagram-50.png"
            alt="instagram"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Instagram"
          />
        </Link>
        <Link onClick={() => openTab("linkedin")}>
          <img
            src="../img/linkedin-50.png"
            alt="linkedin"
            height="30px"
            title="LinkedIn"
          />
        </Link>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  left: 0;
  bottom: 0;
  position: fixed;
  border-top: 1px solid var(--mainGray);
  background: var(--mainWhite) !important;
  color: var(--mainBrown) !important;
  font-size: 10px !important;
`;

const openTab = icon => {
  if (icon === "linkedin") {
    window.open("https://www.linkedin.com/");
  } else if (icon === "facebook") {
    window.open("https://www.facebook.com/");
  } else if (icon === "twitter") {
    window.open("https://twitter.com/");
  } else if (icon === "instagram") {
    window.open("https://www.instagram.com/");
  }
};
