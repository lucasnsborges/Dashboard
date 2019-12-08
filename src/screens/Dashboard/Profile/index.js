import React, { Component } from "react";

import Avatar from "./Avatar";
import Signature from "./Signature";

const user = {
  picture_url:
    "https://avatars.organizze.com.br/user-2658166/a67118c9-15a9-449b-ab08-a98d9ae85020",
  name: "Lucas",
  email: "deposito801@gmail.com",
  signature: "free",
  expires: "05/12/2019"
};

export default class Profile extends Component {
  render() {
    return (
      <div className="page">
        <div className="profile-container bg-white">
          <Avatar url={user.picture_url} />

          <div className="text-center m-4">
            <h4>{user.name}</h4>
            <span>{user.email}</span>
            <p className="color-primary">Alterar senha</p>
          </div>

          <div className="container signature-wrapper">
            <h6 className="mt-4 mb-4 ml-1">Assinatura</h6>
            <Signature type={user.signature} time={user.expires} />
          </div>
        </div>
      </div>
    );
  }
}
