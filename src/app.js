import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>Portfolio</h1>
          </header>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
