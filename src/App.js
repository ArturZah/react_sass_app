import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './scss/app.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ () => <Home /> } />
          <Route path="/about" render={ () => <About title='about'/> } />
          <Route path="/contact" render={ () => <Contact /> } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
