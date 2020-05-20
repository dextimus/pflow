import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { email, name, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: "hello.pflow@gmail.com",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_I8mm3O84",
      templateParams,
      "user_Sn40zMItc26BeC9oHecXv"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <>
        <React.Fragment>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlid="formBasicName">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Your Name"
              />
            </FormGroup>
            <FormGroup controlid="formBasicEmail">
              <Label className="text-muted"></Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup controlid="formBasicSubject">
              <Label className="text-muted"></Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, "subject")}
                placeholder="Item Name"
              />
            </FormGroup>
            <FormGroup controlid="formBasicMessage">
              <Label className="text-muted"></Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
                placeholder="Message"
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </React.Fragment>
      </>
    );
  }
}
export default ContactForm;
