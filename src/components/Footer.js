import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper className="container">
      <div className="d-flex justify-content-center my-3">
        <div>
          <img
            className="img-icon"
            src="../img/facebook_icon.png"
            alt="facebook"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Facebook"
            onClick={() => openTab("facebook")}
          />

          <img
            className="img-icon"
            src="../img/instagram_icon.svg"
            alt="instagram"
            height="30px"
            style={{ marginRight: "20px" }}
            title="Instagram"
            onClick={() => openTab("instagram")}
          />

          <a href={"mailto:hello.pflow@gmail.com"}>
            <img
              className="img-icon"
              src="../img/gmail.png"
              alt="email"
              height="30px"
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
  // background: var(--main) !important;
  color: var(--mainBrown) !important;
  font-size: 10px !important;
`;

const openTab = (icon) => {
  if (icon === "facebook") {
    window.open(
      "https://www.facebook.com/pg/P-flow-111272256919544/about/?ref=page_internal"
    );
  } else if (icon === "instagram") {
    window.open("https://www.instagram.com/hello.pflow/");
  }
};
