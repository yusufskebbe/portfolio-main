import React from 'react'
import myPhoto from '../assets/my-photo.png'
import yusuf from '../assets/yusuf.jpeg'
import yusuf2 from '../assets/a.png'
import b from '../assets/b.png'
import c from '../assets/c.png'

function Hero() {
  return (
    <div className=''>
     <div className='container min-w-4xl flex'>
      <div className='leftside w-1/2 '>
        <h1 className='mb-4 tracking-widest leading-tight uppercase  text-5xl font-bold bg-gradient-to-t from-violet-700  via-blue-500 to-blue-300  text-transparent bg-clip-text'>
        Welcome to my portfolio
        </h1>
        <p className='mt-4 text-lg '>Hi, I'm Yusuf KEBBE. A passionate Front-end React Developer based in Istanbul, Türkiye. 📍</p>
        <div className="social-links mt-8 flex gap-4">
        <i className="fa-brands fa-github text-3xl"></i>
        <i className="fa-brands fa-linkedin text-3xl"></i>
        <i className="fa-brands fa-instagram text-3xl"></i>
        </div>
      </div>
      <div className="rightside w-1/2 relative">
       
        <img src={yusuf} alt="me"  className=' h-60 w-60 rounded-full object-cover absolute right-0 animate-[borderAnimation_8s_ease-in-out_infinite] border-black border-solid border-2' />
       
      </div>
    
    </div>
    <div className='tech-stack flex mt-20 gap-5 justify-start items-center'>
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