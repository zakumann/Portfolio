import React from 'react'

function ProjectItem({ image, name, skill, role, result, URL }) {
  return (
    <div className="projectItem">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{skill}</p>
        <p>{role}</p>
        <p>{result}</p>
        <p><a href={URL}>Link</a></p>
    </div>
  );
}

export default ProjectItem;