import React, { Component } from 'react';

export default class Avatar extends Component {
  render() {
    return (
      <div>
        <img className="avatar rounded-circle" alt="sua foto de perfil" src={this.props.url} />
      </div>
    );
  }
}
