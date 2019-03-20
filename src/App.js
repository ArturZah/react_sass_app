import React, { Component } from 'react';
import Header from './components/header';
import Home from './components/home';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
