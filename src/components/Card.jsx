import React from 'react'

function Card({id, projectName, projectLiveDemo, projectSourceCode, projectDesc,projectImage}) {
  return (
    
        <div className='bg-slate-900 text-white p-4  flex flex-col gap-4'>
     
            {/* <img src={projectImage} alt="img" /> */}
            <h1 className='font-semibold mt-40'>{projectName}</h1>
           
           
            <p>{projectDesc}</p>
            <div className='links flex gap-2'>
            <a className='cursor-pointer p-4 bg-yellow-300 mt-2 rounded-lg text-black font-medium hover:bg-slate-900 hover:text-yellow-300 target:_blank' href={projectLiveDemo} >Live Demo</a>
            <a className='cursor-pointer p-4 bg-yellow-300 mt-2 rounded-lg text-black font-medium hover:bg-slate-900 hover:text-yellow-300 target:_blank' href={projectSourceCode}>Source Code</a>
            </div>
   
         </div>
   
     
     
  
  )
}

export default Card