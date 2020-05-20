import React from "react";
import ContactForm from "../Form";
import Footer from "./Footer";

export default function Contact() {
  return (
    <React.Fragment>
      <div className="main" id="contact">
        <div className="col-10 mx-auto text-center my-1 pt-5">
          <p>
            We make our pieces based on order, each handmade and unique.
            <br />
            We are located in Copenhagen S, where you can also pick up
            <br />
            the product. Order by filling the form below or reach us on
            <br />
            hello.pflow@gmail.com or social media channels.
            <br />
          </p>
        </div>
        <ContactForm />
        <Footer />
      </div>
    </React.Fragment>
  );
}
