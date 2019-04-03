import React, { useState } from 'react';
import LeftSideNav from './components/LeftSideNav/LeftSideNav';
import Home from './components/Home/Home';
import ColorBrowser from './components/ColorBrowserApp/ColorBrowser/ColorBrowser';
import CookingTimers from './components/CookingTimersApp/CookingTimers/CookingTimers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import styled, { css } from 'styled-components';

const MenuToggler = styled.span`
  color: ${props => props.toggleMenu ? '#fff' : '#000'}
`

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const togglingMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <Router>
      <section className="App container">
        <div className="content">
          <LeftSideNav
            className="sidebar"
            toggleMenu={toggleMenu}
          />
          <header>
            <MenuToggler
              className="toggle-menu-button"
              toggleMenu={toggleMenu}
              onClick={() => togglingMenu()}
            >=</MenuToggler>
          </header>
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

export default App;

// <span
//               className="toggle-menu-button"
//               toggleMenu={toggleMenu}
//               onClick={() => togglingMenu()}
//             >=</span>

// class App extends Component {
//   toggleMenu = () => {

//   }
//   render() {
//     return (
//       <Router>
//         <section className="App container">
//           <div className="content">
//             <LeftSideNav
//               className="sidebar"
//             />
//             <header>
//               <span
//                 onClick={() => toggleMenu()}
//               >=</span>
//             </header>
//             <main className="main-view">
//               <Route exact path="/" component={Home} />
//               <Route path="/color-browser" component={ColorBrowser} />
//               <Route path="/cooking-timers" component={CookingTimers} />
//             </main>
//           </div>
//         </section>
//       </Router>
//     );
//   }
// }

// export default App;
