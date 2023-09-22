import React from 'react'
import { ProjectList } from '../Helpers/ProjectList';
import ProjectItem from '../Component/ProjectItem'
import '../Styles/Project.css'
import transition from '../transition';

function Project() {
  return (
    <div className="project">
        <h1 className="projectTitle">My Project</h1>
        <div className="projectList">
          {ProjectList.map((projectItem, key) => {
            return (
              <ProjectItem
                key={key}
                image={projectItem.image}
                name={projectItem.name}
                skill={projectItem.skill}
                role={projectItem.role}
                result={projectItem.result}
                URL={projectItem.URL}
              />
            );
          })}
        </div>
    </div>
  );
}

export default transition(Project);