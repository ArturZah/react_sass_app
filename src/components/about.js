import React, { Component } from 'react';
import '../scss/about.scss';

export class About extends Component {

  render(props) {

    return (
      <div className="about-cnt">
        <div className="about-content flex">
          <h2 className="about-title">{this.props.title}</h2>
          <div className="about-text flex">
            <p>This single page application was made with <strong>react.js</strong> and <strong>sass</strong>. I also use react-router-dom for make navigation routing on page and axios for communication with jsonplaceholder <strong>API</strong>. You can check source code on my <strong>GitHub</strong> account.</p>
            <a className="github-btn flex" href="https://github.com/ArturZah/react_sass_app">GitHub</a>
            <div className="about-icons flex">
              <i className="fab fa-react"></i>
              <i className="fab fa-git"></i>
              <i className="fab fa-sass"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;