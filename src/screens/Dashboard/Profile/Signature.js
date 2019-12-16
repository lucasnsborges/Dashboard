import React, { Component } from "react";

export default class Signature extends Component {
  render() {
    return (
      <div className="bg-light w-100 d-flex align-items-center justify-content-between p-4">
        <div>
          <h6 className="text-uppercase text-primary">{this.props.type}</h6>
          <p>
            Validade: <span>{this.props.time}</span>
          </p>
        </div>
        <button className="btn btn-primary">
          {this.props.type === "pro"
            ? "Prolongar assinatura"
            : "Efetuar assinatura"}
        </button>
      </div>
    );
  }
}
