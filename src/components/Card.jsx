import React from 'react'

function Card({id, projectName, projectLiveDemo, projectSourceCode, projectDesc,projectImage}) {
  return (
      

<div className='  text-black       rounded-lg'>


    <img src={projectImage} alt="img" className='object-contain w-full h-96 ' /> 
     <div className='p-2 flex flex-col gap-4'>
     <h1 className='font-medium text-4xl text-center md:text-left mt-4 '>{projectName}</h1>
     
     
     <p className='text-center text-xl md:text-left opacity-80 ' >{projectDesc}</p>
     <div className='links flex items-center justify-center gap-2 mb-5 md:justify-start'>
     <a className='cursor-pointer p-4 bg-white mt-2 rounded-lg text-blue-500  font-semibold text-xl  ' href={projectLiveDemo} >Live Demo</a>
     <a className='cursor-pointer p-4 bg-violet-600 mt-2 rounded-lg text-white  font-semibold  text-xl ' href={projectSourceCode}>Source Code</a>
     </div>
     </div>
    
      

   </div>
   
     
     
  
  )
}

export default Card