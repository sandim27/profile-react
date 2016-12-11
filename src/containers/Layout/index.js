import React, { Component } from 'react';
import Header from '../../components/Header';

import './styles/index.css'

class Layout extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
