import React, { Component } from 'react';
import LeftSideNav from './components/LeftSideNav/LeftSideNav';
import Home from './components/Home/Home';
import ColorBrowser from './components/ColorBrowserApp/ColorBrowser/ColorBrowser';
import CookingTimers from './components/CookingTimersApp/CookingTimers/CookingTimers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <section className="App container">
          <header className="header">
            Header Part
          </header>
          <div className="content">
            <LeftSideNav
              className="sidebar"
            />
            <main className="main-view">
              <Route exact path="/" component={Home} />
              <Route path="/color-browser" component={ColorBrowser} />
              <Route path="/cooking-timers" component={CookingTimers} />
            </main>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
