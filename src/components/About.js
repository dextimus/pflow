import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="col-10 mx-auto text-center text-title my-5 pt-5">
        <h1>About Us</h1>
      </div>
      <div className="pic-div">
        <img className="pic" src="../img/P&G.jpg" alt="P&G" width="300rem" />
        <p>
          Integer egestas, turpis vitae maximus tristique, lorem erat dictum
          odio, et faucibus nibh odio sit amet erat. Suspendisse in ipsum est.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Etiam feugiat ipsum et blandit efficitur.
          Etiam vulputate cursus pulvinar. Pellentesque tristique at nunc eget
          congue. Phasellus mollis consequat urna ac porttitor. Vivamus
          malesuada sapien rutrum quam malesuada lacinia. Sed lobortis, elit
          eget consequat aliquam, orci lectus venenatis neque, porttitor
          condimentum justo augue a enim. Sed ornare libero a ipsum venenatis,
          ac pellentesque nisl consectetur. In augue nulla, laoreet sit amet
          erat consectetur, vehicula condimentum nunc. Nam eu augue sit amet
          risus interdum pellentesque vel quis nisi. Sed a mollis nunc, in
          blandit velit.
        </p>
      </div>
    </React.Fragment>
  );
}
