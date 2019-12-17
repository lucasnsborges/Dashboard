import "../styles.css";
import React, { Component } from "react";

import api from "../../../api";

export default class Signup extends Component {
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

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      isLoading: true
    });

    const { email, password, passwordRepeat } = this.state;

    const regex = /\S+@\S+\.\S+/;
    const validateEmail = regex.test(email);

    console.log(validateEmail);

    if (!email || !validateEmail) {
      this.setState({
        message: "É necessário informar um e-mail válido",
        isLoading: false
      });

      return false;
    }

    if (!password || !passwordRepeat) {
      this.setState({
        message: "É necessário informar uma senha válida",
        isLoading: false
      });

      return false;
    }

    if (password !== passwordRepeat) {
      this.setState({
        message: "As senhas para acesso não são as mesmas",
        isLoading: false
      });

      return false;
    }

    this.setState({
      message: ""
    });

    const create = await api.createUser({ email, password });

    if (
      create.response &&
      create.response.status &&
      create.response.status !== 201
    ) {
      this.setState({
        message: create.response.data.message,
        isLoading: false
      });

      return false;
    }

    if (create.email) {
      const login = await api.login({ email, password });

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
            <h1>Cria sua conta gratuitamente</h1>

            {this.state.message && (
              <div className="alert alert-danger" role="alert">
                {this.state.message}
              </div>
            )}

            <form className="d-flex flex-column" style={{ margin: "10px 0" }}>
              <div className="form-group">
                <label>Seu email</label>
                <input
                  placeholder="Insira um endereço de e-mail válido"
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                />
              </div>

              <div className="d-flex flex-row">
                <div className="form-group mr-1">
                  <label>Sua senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group ml-1">
                  <label>Repetir senha</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordRepeat"
                    onChange={this.handleChange}
                  />
                </div>
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
