import React, { Component } from 'react';
import { Movies } from '../data/data';
import '../scss/home.scss';

export class Home extends Component {

  render() {

    let movieTiles = Movies.map((movie) => {
      return (
        <div className="tile-cnt" key={ movie.id }>
          <h2>{ movie.title }</h2>
          <div className="tile-content">
            <iframe width="99.8%" height="100%" src={ movie.url } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={ movie.id }></iframe>
          </div>
          <p>{ movie.dsc}</p>
        </div>
      );
    });

    return (
      <div className="home-cnt">
        { movieTiles }
      </div>
    )
  }
}

export default Home;