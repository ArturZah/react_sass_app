import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../scss/hamburger.scss';



export class Hamburger extends Component {

  state = {
    isMenuOpen: false
  }
  render() {
    return (
      <React.Fragment>
        <div className="hamburger-btn" onClick={ () => this.setState({isMenuOpen: !this.state.isMenuOpen}) }> {/* On click toogle state */}
          <div className={ this.state.isMenuOpen ? "line line-click1" : "line"}></div> {/* if ismenuopen state is true (?) use classes else (:) use one class */}
          <div className={ this.state.isMenuOpen ? "line line-click2" : "line"}></div>
          <div className={ this.state.isMenuOpen ? "line line-click3" : "line"}></div>
        </div>
        <ul className={ this.state.isMenuOpen ? "menu-items flex menu-on" : "menu-items flex"}> 
          <li><Link to="/" className="menu-item">Home</Link></li>
          <li><Link to="/about" className="menu-item">About</Link></li>
          <li><Link to="/contact" className="menu-item">Contact</Link></li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Hamburger
