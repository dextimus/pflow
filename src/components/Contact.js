import React from "react";
import ContactForm from "../Form";
import Footer from './Footer';

export default function Contact() {
  return (
    <React.Fragment>
      <div className="col-10 mx-auto text-center text-title my-5 pt-5">
        <p>
          Currently we do not provide any shipping methods.
          <br />
          You have to come and pick up at:
          <br />
          <br />
          Alliancevej 20 st th
          <br />
          2450 Sydhavn
          <br />
          Copenhagen
          <br />
          <br />
          At the moment we accept only the following payment methods:
          <br />
          - MobilePay;
          <br />
          - PayPal;
          <br />
          <br />
          Please call +45 42 43 25 92 before making any payment or having any
          questions or:
        </p>
      </div>
      <ContactForm />
    <Footer />
    </React.Fragment>
  );
}
