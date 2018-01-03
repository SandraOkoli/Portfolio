import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';


// import NavBar from './components/utils/NavBar';
import Scroll from './components/utils/Scroll';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <header>
            {/* <NavBar/> */}
          </header>
          <div>
            <Scroll/>
          </div>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
