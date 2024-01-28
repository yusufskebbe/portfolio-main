import React from 'react';
import PROJECTS from '../projects.js' ;
import Card from './Card.jsx';


function MyProjects() {
  return (
    
    <div className='mt-40  ' >
      <h1 className=' text-4xl uppercase font-semibold text-center'>My projects</h1>
      <div className='grid grid-cols-2 grid-rows-2 gap-2 m-2 p-2 '>
      {PROJECTS.map((project)=>{
        return (
          <Card id={project.id} projectName={project.projectName} projectLiveDemo={project.projectLiveDemo} projectSourceCode={project.projectSourceCode} projectDesc={project.projectDesc} projectImage={project.projectImage} />
        )
      })}
      </div>
     
    </div>
  )
}

export default MyProjects