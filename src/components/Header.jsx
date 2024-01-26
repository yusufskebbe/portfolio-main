import React from 'react'

function Header() {
  return (
   <header>
    <nav className='flex justify-between p-8  shadow-md shadow-black'>
     <h1 className='text-3xl uppercase font-bold '>Yusuf.Dev</h1>
      <div className='flex'>
        <ul className='flex gap-5 text-lg font-semibold'>
          <li className='hover:text-red-500 cursor-pointer'>Home</li>
          <li className='hover:text-red-500 cursor-pointer'>About Me</li>
          <li className='hover:text-red-500 cursor-pointer'>Contact Me</li>
          <li className='hover:text-red-500 cursor-pointer'>Projects</li>  
        </ul>
      </div>
    </nav>
   </header>
  )
}

export default Header