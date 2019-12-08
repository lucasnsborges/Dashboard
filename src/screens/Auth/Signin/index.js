import "../styles.css";
import React, { Component } from "react";

export default class Signin extends Component {
  render() {
    return (
      <div className="page">
        <div className="logo">
          <a href="/">
            <img
              class="img-fluid"
              alt="Organizze"
              src="https://s3.amazonaws.com/emails.organizze/new-logo-organizze-grey.svg"
            />
          </a>
        </div>
        <div className="signin bg-white">
          <div className="form-box d-flex flex-column">
            <h1>Acesse sua conta</h1>
            <div className="w-75 d-flex align-item-center">
              <button type="button" class="btn btn-primary">
                Entrar com Facebook
              </button>
            </div>
            <div className="w-75 d-flex align-item-center">
              <button type="button" class="btn btn-primary">
                Entrar com Google
              </button>
            </div>

            <form className="d-flex flex-column" style={{ margin: "10px 0" }}>
              <div class="form-group">
                <label for="exampleInputEmail1">Seu email</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="d-flex flex-row">
                <div class="form-group mr-1">
                  <label for="exampleInputPassword1">Sua senha</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="form-group ml-1">
                  <label for="exampleInputPassword1">Repetir senha</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
