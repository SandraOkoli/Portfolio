import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';


import NavBar from './components/NavBar';
import About from './components/About';
import ProjectsIndex from './components/projects/ProjectsIndex';

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <header>
            <NavBar/>
            <h1>My Portfolio</h1>
          </header>
          <section>
            <About/>
          </section>
          <section>
            <ProjectsIndex/>
          </section>
          <section>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
