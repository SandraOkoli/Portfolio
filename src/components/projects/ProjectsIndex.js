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
      <div className="container">
        <h1>Projects</h1>
        <ul>
          { this.state.projects.map(project =>
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>
                {/* <h3>{project.title}</h3> */}
                <img className="projects-index" src={project.image}/>
                {/* <button>View Project</button> */}
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
export default ProjectsIndex;
