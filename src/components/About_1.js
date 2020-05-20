import React from "react";
import { about } from "../Data";
import styled from 'styled-components';

const About = () => {
  return (
    <React.Fragment>
      <DivWrapper>
        <div className="pic-div my-5" id="about">
          <img
            className="pic"
            src="../img/home.jpeg"
            alt="about"
            width="400rem"
          />
          <p>{about.first}</p>
          <p>{about.second}</p>
          <p>{about.third}</p>
          <p>{about.fourth}</p>
          <p className="petras">Regards,</p>
          <p className="petras">Petras</p>
          <p className="petras">P-Flow</p>
        </div>
        <div className="img-container_2">
          <img
            src="../img/story-1.jpg"
            alt="story-1"
            width="300rem"
            height="100%"
            className="story"
          />
          <img
            src="../img/story-2.jpg"
            alt="story-2"
            width="300rem"
            height="100%"
            className="story"
          />
          <img
            src="../img/story-3.jpg"
            alt="story-3"
            width="300rem"
            height="100%"
            className="story"
          />
        </div>
        <div className="selection">
          <p className="selection-p">Selection</p>
        </div>
      </DivWrapper>
    </React.Fragment>
  );
};

export default About;


const DivWrapper = styled.div`
  .pic {
    float: right;
    padding: 10px 30px 10px 50px;
  }

  .petras {
    margin: 0;
  }

  .story {
    padding-top: 2rem;
  }
`;