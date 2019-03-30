import React, { Component } from 'react';
import LeftSideNav from './components/LeftSideNav/LeftSideNav';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="App">
          <LeftSideNav />
            <div>
              <Route exact path="/" component={Home} />
            </div>
        </section>
      </Router>
    );
  }
}

export default App;
