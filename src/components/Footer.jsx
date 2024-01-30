import React from 'react'

function Footer() {
  return (
    <div className='footer absolute  left-0 mt-40 p-10 w-full bg-gradient-to-l from-violet-700  via-blue-500 to-blue-300'>
        <div className='flex justify-around items-center'>
        <h2 className='font-bold text-white text-lg'>Copyright © 2024. All rights are reserved</h2>
        <div className="social-links  flex gap-4">
        <i className="fa-brands fa-github text-3xl text-transparent bg-clip-text bg-white"></i>
        <i className="fa-brands fa-linkedin text-3xl text-transparent bg-clip-text bg-white"></i>
        <i className="fa-brands fa-instagram text-3xl text-transparent bg-clip-text bg-white"></i>
        </div>
        </div>
        
    </div>
  )
}

export default Footer