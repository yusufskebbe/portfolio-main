import React from 'react'
//import aboutme from '../assets/t.png'
import aboutme from '../assets/aboutmee.png'

function AboutMe() {
  return (
    <div id='about' className='mt-20 min-w-4xl flex flex-col justify-center items-center gap-8 md:flex-row'>
      <div className="leftside">
          <div className="image-container ">
           <img src={aboutme} alt="" className='h-80 md:h-auto'/> 
         
          </div>
      </div>
      <div className="rightside flex flex-col justify-center items-center   ">
          <h2 className='mb-4 text-2xl'>Quick Brief <strong className='uppercase m-2'>about me</strong></h2>
          <p className='opacity-75 text-center text-xl md:text-left'>Hey, my name is Yusuf, and I'm a Frontend Developer. My passion is to create & develop pixel perfect UI/UX design and solve complex problems . </p>
          <p className='opacity-75 mt-5 text-center text-xl md:text-left'>My main stack currently is React Javascript with Tailwind CSS and Sass..</p>
      </div>
    </div>
  )
}

export default AboutMe