import React, { Component } from 'react'
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
          <li><a href="#home" className="menu-item">Home</a></li>
          <li><a href="#home" className="menu-item">About</a></li>
          <li><a href="#home" className="menu-item">Contact</a></li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Hamburger
