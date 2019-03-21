import React, { Component } from 'react';
import '../scss/footer.scss';

export class Footer extends Component {

  render() {

    return (
      <div className="footer-cnt flex">
        <a href="https://azahorski.pl/" target="_blank" rel="noopener noreferrer">Artur Zahorski &copy; 2019</a>
      </div>
    )
  }
}

export default Footer;