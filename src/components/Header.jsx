import React from 'react'

function Header() {
  return (
   <header >
    <nav className= '  md:flex justify-between p-8  shadow-sm shadow-gray-300 '>
      <a href="#"><h1 className='text-3xl uppercase font-extralight text-center md:text-left '>Yusuf.Dev</h1></a>
     
      <div className='hidden md:flex'>
        <ul className=' flex gap-2 md:text-sm lg:text-lg  uppercase  '>
          <li className=' font-semibold  cursor-pointer bg-gradient-to-r from-violet-700  via-blue-500 to-blue-300  text-transparent bg-clip-text px-4 py-2 rounded-md tracking-[0.2rem] leading-relaxed   '>Home</li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'><a href="#about">About Me</a></li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'> <a href="#projects">Projects</a></li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'><a href="#contact">Contact Me</a></li>  
        </ul>
      </div>
    </nav>
   </header>
  )
}

export default Header