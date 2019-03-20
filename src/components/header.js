import React, { Component } from 'react';
import Hamburger from './hamburger-menu';
import '../scss/header.scss';

export class Header extends Component {

  render() {
    return (
      <nav id="home" className="nav-bar flex">
        <div className="header-logo flex">
          <h2 className="header-text">React App</h2>
          <span className="header-icon"><i className="fab fa-react"></i></span>
        </div>
        <div className="menu">
          <Hamburger />
        </div>
      </nav>
    )
  }
}

export default Header
