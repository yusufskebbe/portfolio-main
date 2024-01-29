import React from 'react'

function Header() {
  return (
   <header >
    <nav className='flex justify-between p-8  shadow-sm shadow-gray-300 '>
     <h1 className='text-3xl uppercase font-bold '>Yusuf.Dev</h1>
      <div className='flex'>
        <ul className='flex gap-2 text-lg font-light uppercase  '>
          <li className=' font-semibold  cursor-pointer bg-gradient-to-r from-violet-700  via-blue-500 to-blue-300  text-transparent bg-clip-text px-4 py-2 rounded-md tracking-[0.2rem] leading-relaxed   '>Home</li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'>About Me</li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'>Contact Me</li>
          <li className=' cursor-pointer px-4 py-2 tracking-[0.2rem] leading-relaxed'>Projects</li>  
        </ul>
      </div>
    </nav>
   </header>
  )
}

export default Header