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
        <section className="App">
          <LeftSideNav />
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/color-browser" component={ColorBrowser} />
              <Route path="/cooking-timers" component={CookingTimers} />
            </div>
        </section>
      </Router>
    );
  }
}

export default App;
