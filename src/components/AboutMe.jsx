import React from 'react'
import aboutme from '../assets/t.png'

function AboutMe() {
  return (
    <div className='mt-40 min-w-4xl flex justify-center items-center gap-8 '>
      <div className="leftside">
          <div className="image-container max-w-lg">
             <img src={aboutme} alt="" />
         
          </div>
      </div>
      <div className="rightside   ">
          <h2 className='mb-4 text-lg'>Quick Brief <strong className='uppercase m-2'>about me</strong></h2>
          <p className='opacity-75'>Hey, my name is Yusuf, and I'm a Frontend Developer. My passion is to create & develop pixel perfect UI/UX design and solve complex problems . </p>
          <p className='opacity-75 mt-5'>My main stack currently is React Javascript with Tailwind CSS and Sass..</p>
      </div>
    </div>
  )
}

export default AboutMe