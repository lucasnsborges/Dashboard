import "../styles.css";
import React, { Component } from "react";

import api from '../../../api';

export default class Signin extends Component {
  state = {
    isLoading: false
  };

  handleChange = e => {
    const key = e.currentTarget.getAttribute("id");
    const value = e.currentTarget.value;

    this.setState({
      [key]: value
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({
      isLoading: true
    });

    const { email, password } = this.state;

    const login = await api.login({email, password})

    if (login.token) {
      localStorage.setItem("token", login.token);
      localStorage.setItem("budd_user", JSON.stringify(login.user));
      window.location.href = "/dashboard/1/profile";
    } else {
      this.setState({
        message: "Ops... tente novamente ou entre contanto com nosso suporte",
        isLoading: false
      });

      return false;
    }
  };

  render() {
    return (
      <div className="page">
        <div className="logo">
          <a href="/">
            <img
              className="img-fluid"
              alt="Organizze"
              src="https://s3.amazonaws.com/emails.organizze/new-logo-organizze-grey.svg"
            />
          </a>
        </div>
        <div className="signin__box bg-white">
          <div className="signin__box-content d-flex flex-column">
            <h1>Acesse sua conta</h1>

            <form className="d-flex flex-column" style={{ margin: "10px 0" }}>
              <div className="form-group">
                <label>Seu email</label>
                <input
                  placeholder="Insira seu e-mail de acesso"
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label>Sua senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>

              <button
                onClick={this.handleSubmit}
                className="btn btn-primary text-white"
              >
                {this.state.isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  "Iniciar sessão"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
