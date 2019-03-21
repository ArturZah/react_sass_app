import React, { Component } from 'react';
import '../scss/about.scss';

export class About extends Component {

  render(props) {

    return (
      <div className="about-cnt">
        <div className="about-content flex">
          <h2 className="about-title">{this.props.title}</h2>
          <div className="about-text flex">
            <p>This single page application was made with <strong>react.js</strong> and <strong>sass</strong>. I also use react-router-dom for make navigation routing on page. You can check source code on my GitHub account.</p>
            <a className="github-btn flex" href="https://github.com/ArturZah/react_sass_app">GitHub</a>
            <div className="about-icons flex">
              <i class="fab fa-react"></i>
              <i class="fab fa-git"></i>
              <i class="fab fa-sass"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;