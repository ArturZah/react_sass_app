import React, { Component } from 'react';
import Hamburger from './hamburger-menu';
import '../scss/header.scss';

export class Header extends Component {

  render() {
    return (
      <nav id="home" className="nav-bar flex">
        <div className="header-logo">
          <span className="header-icon"><i className="fab fa-react"></i></span>
          <h2>React App</h2>
        </div>
        <div className="menu">
          <Hamburger />
        </div>
      </nav>
    )
  }
}

export default Header
