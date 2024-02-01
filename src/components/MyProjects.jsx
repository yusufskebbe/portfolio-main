import React from 'react';
import PROJECTS from '../projects.js' ;
import Card from './Card.jsx';


function MyProjects() {
  return (
    
    <div id='projects' className='mt-40 ' >
        <h1 className=' text-center text-4xl mb-5  font-semibold bg-gradient-to-b from-violet-700  via-blue-500 to-blue-200  text-transparent bg-clip-text  uppercase tracking-wide md:text-5xl '>My Projects</h1>
      <div className='grid grid-cols-1 grid-rows-2 gap-10 m-2 p-2 md:grid-cols-2'>
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