import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';

import Scroll from './components/utils/Scroll';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Scroll/>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
