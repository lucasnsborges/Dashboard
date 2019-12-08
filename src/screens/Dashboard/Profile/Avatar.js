import React, { Component } from 'react';

// import { Container } from './styles';

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <img className="avatar" alt="sua foto de perfil" src={this.props.url} />
      </div>
    );
  }
}
