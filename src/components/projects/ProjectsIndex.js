import React from 'react';
import Axios from 'axios';

// import ProjectsShow from './components/projects/ProjectsShow';

class ProjectsIndex extends React.Component {
  state = {
    projects: []
  }

  componentDidMount() {
    Axios
      .get('/api/projects')
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>Muse</li>
          <li>The Counted</li>
          <li>Out?</li>
          <li>GA Yearbook</li>
          <li>Slap a doll</li>
        </ul>
      </div>
    );
  }
}
export default ProjectsIndex;
