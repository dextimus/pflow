import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper className="navbar px-sm-6">
      <ul className="list-inline mb-0" style={{ marginLeft: "4rem" }}>
        <li><u>Payment and Shipping Info</u></li>
      </ul>

      <div style={{ marginRight: "4rem" }}>
        <img
          className="img-icon"
          src="../img/facebook-50.png"
          alt="facebook"
          height="30px"
          style={{ marginRight: "20px", cursor: "pointer" }}
          title="Facebook"
          onClick={() => openTab("facebook")}
        />

        <img
          className="img-icon"
          src="../img/twitter-50.png"
          alt="twitter"
          height="30px"
          style={{ marginRight: "20px", cursor: "pointer" }}
          title="Twitter"
          onClick={() => openTab("twitter")}
        />
        <img
          className="img-icon"
          src="../img/instagram-50.png"
          alt="instagram"
          height="30px"
          style={{ marginRight: "20px", cursor: "pointer" }}
          title="Instagram"
          onClick={() => openTab("instagram")}
        />

        <img
          className="img-icon"
          src="../img/linkedin-50.png"
          alt="linkedin"
          height="30px"
          style={{ cursor: "pointer" }}
          title="LinkedIn"
          onClick={() => openTab("linkedin")}
        />
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  width: 100%;
  left: 0;
  bottom: 0;
  // position: fixed;
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
