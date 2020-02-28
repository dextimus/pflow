import React, { Component } from "react";

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center py-5">
            <h1>error</h1>
            <br />
            <h3>
              the requested{" "}
              <span className="text-danger text-title">
                url{this.props.location.pathname}
              </span>{" "}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
