import React from 'react'

import yusuf from '../assets/yusuf.jpeg'


import c from '../assets/c.png'

function Hero() {
  return (
    <div className=''>
     <div className='  flex flex-col  items-center md:flex-row md:content-center  '>
      <div className=' md:min-w-1/2 '>
        <h1 className='mb-4 mt-5 tracking-widest leading-tight uppercase text-center text-4xl font-bold bg-gradient-to-t from-violet-700  via-blue-500 to-blue-300  text-transparent bg-clip-text md:text-left md:mt-0'>
        Welcome to my portfolio
        </h1>
        <p className='mt-4 text-lg tracking-wider px-5 text-center md:text-left md:px-0 '>Hi, I'm Yusuf KEBBE. A passionate Front-end React Developer based in Istanbul, Türkiye. 📍</p>
        <div className="social-links mt-8 flex gap-4 justify-center md:justify-start">
       <a href="https://github.com/yusufskebbe" target='_blank'> <i className="fa-brands fa-github text-3xl cursor-pointer"></i></a>
        <a href="https://www.linkedin.com/in/yusuf-kebbe/" target='_blank' ><i className="fa-brands fa-linkedin text-3xl cursor-pointer"></i></a>
       <a href="https://www.instagram.com/yusuf_kebbe" target='_blank'> <i className="fa-brands fa-instagram text-3xl cursor-pointer"></i></a>
        </div>
      </div>
      <div className="rightside relative mt-5 md:mt-0 md:w-1/2   ">
       
        <img src={yusuf} alt="me"  className='h-40 w-40  rounded-full object-cover  hover:scale-75 transition-all border-black border-solid border-2  md:h-60 md:w-60  ' />
       
      </div>
    
    </div>




    <div className='tech-stack flex flex-col mt-20 gap-5 items-center   md:flex-row '>
      <h2 className=' capitalize font-semibold text-xl'>Tech Stack | </h2>
      <div className="icons flex gap-7 px-3">
      <i class="fa-brands fa-react text-4xl hover:animate-spin block text-transparent bg-clip-text bg-blue-500"></i>
      <i class="fa-brands fa-js text-4xl hover:animate-bounce block text-transparent bg-clip-text bg-yellow-400"></i>
      <i class="fa-brands fa-html5 text-4xl hover:animate-bounce block text-transparent bg-clip-text bg-red-700"></i>
      <i class="fa-brands fa-css3-alt text-4xl hover:animate-bounce block text-transparent bg-clip-text bg-blue-500"></i>
      <i class="fa-brands fa-sass text-4xl hover:animate-bounce block text-transparent bg-clip-text bg-red-400"></i>

      <img src={c} alt="" className='h-10 object-cover hover:animate-spin '/>
  
      </div>
    </div>
   
    </div>
   
  )
}

export default Hero

// image class md:absolute md:right-0