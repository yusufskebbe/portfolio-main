import React from 'react'

function Footer() {
  return (
    <div className='footer absolute  left-0 mt-40 p-10 w-full bg-gradient-to-l from-violet-700  via-blue-500 to-blue-300'>
        <div className='flex flex-col justify-around items-center md:flex-row'>
        <h2 className='font-bold text-white text-center text-lg mb-5 md:mb-0'>Copyright © 2024. All rights are reserved</h2>
        <div className="social-links  flex gap-4">
        <a href="https://github.com/yusufskebbe" target='_blank'> <i className="fa-brands fa-github text-3xl  text-transparent bg-clip-text bg-white cursor-pointer hover:bg-black"></i></a>
        <a href="https://www.linkedin.com/in/yusuf-kebbe/" target='_blank' ><i className="fa-brands fa-linkedin text-3xl  text-transparent bg-clip-text bg-white cursor-pointer hover:bg-black"></i></a>
       <a href="https://www.instagram.com/yusuf_kebbe" target='_blank'> <i className="fa-brands fa-instagram text-3xl text-transparent bg-clip-text bg-white cursor-pointer hover:bg-black"></i></a>
        </div>
        </div>
        
    </div>
  )
}

export default Footer





      