import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
        <h1>Projects</h1>
        { this.state.projects.map(project =>
          <div key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h3>{project.title}</h3>
              <img src={project.image}/>
              <button>View Project</button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
export default ProjectsIndex;
