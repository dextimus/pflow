import React from "react";

const scroll = props => {
  return (
    <div
      style={{ overflow: "scroll", height: "90vh" }}
    >
      {props.children}
    </div>
  );
};

export default scroll;
