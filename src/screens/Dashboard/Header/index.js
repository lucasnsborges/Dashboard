import "../styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MdApps, MdNotifications, MdSettings } from "react-icons/md";

import Tooltip from "react-power-tooltip";

const menu = [
  {
    route: "/dashboard",
    label: "visão geral"
  },
  {
    route: "/dashboard/course",
    label: "curso"
  },
  {
    route: "/dashboard/relatorio",
    label: "relatórios"
  }
];

export default class Header extends Component {
  state = {
    profile: false,
    apps: false,
  };

  showTooltip = (param, bool) => {
    this.setState({ [param]: bool });
  };

  render() {
    return (
      <header className="header">
        <div className="row h-100">
          <div className="col-md-3 col-sm-3 col-xs-3 d-flex align-items-center justify-content-center">
            <a href="/2694487/inicio" active="true">
              <img
                alt="Organizze"
                height="28"
                src="https://email-assets.organizze.com.br/new-logo-organizze-white.svg"
              />
            </a>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6 d-flex align-items-center justify-content-center">
            <nav className="h-100">
              <ul className="row h-100">
                {menu.map(item => (
                  <li>
                    <Link to={item.route}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-md-2">
            <nav className="h-100">
              <ul className="row h-100 d-flex justify-content-around">
                <li>
                  <div
                    style={{ position: "relative" }}
                    onMouseOver={() => this.showTooltip('apps', true)}
                    onMouseLeave={() => this.showTooltip('apps', false)}
                  >
                    <MdApps className="header-icon font24" />
                    <Tooltip
                      flat
                      color="#777"
                      fontWeight="500"
                      hoverColor="#22b9fa"
                      hoverBackground="#def5ff"
                      fontSize="14px"
                      borderRadius="0px"
                      textBoxWidth="180px"
                      moveDown="8px"
                      position="bottom center"
                      arrowAlign="center"
                      show={this.state.apps}
                    >

                      <span>Agenda</span>
                      <span>Calculadora</span>
                      <span>Conversor de moedas</span>
                    </Tooltip>
                  </div>
                </li>
                <li>
                  <MdNotifications className="header-icon font22" />
                </li>
                <li>
                  <MdSettings className="header-icon font22" />
                </li>
                <li>
                  <div
                    style={{ position: "relative" }}
                    onMouseOver={() => this.showTooltip('profile', true)}
                    onMouseLeave={() => this.showTooltip('profile', false)}
                  >
                    <img
                      className="header-icon avatar-header popover__title"
                      alt="sua imagem de perfil"
                      src="https://avatars.organizze.com.br/user-2658166/a67118c9-15a9-449b-ab08-a98d9ae85020"
                    />
                    <Tooltip
                      flat
                      color="#777"
                      fontWeight="500"
                      hoverColor="#22b9fa"
                      hoverBackground="#def5ff"
                      fontSize="14px"
                      borderRadius="0px"
                      moveDown="4px"
                      position="bottom center"
                      arrowAlign="end"
                      show={this.state.profile}
                    >
                      <span>Minha conta</span>
                      <span>Indicações</span>
                      <span>Sair</span>
                    </Tooltip>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
