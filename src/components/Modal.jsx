import React, { useState } from 'react'

function Modal({modal,onClose}) {


  
  return (
   
    <div >
       {modal && <div className='w-[100vw] h-[100vh] inset-0 bg-gradient-to-b from-violet-700  via-blue-500 to-blue-300 opacity-90 z-50 fixed'>
        <div className='flex flex-col justify-center items-center h-full '>
        <span onClick={onClose} className='text-4xl cursor-pointer '>X</span>
       <form action="">
          <div className='input-field flex flex-col gap-2 '>
        
           <label htmlFor="" className=' text-lg  '>Email</label>
           <input type="email" className='peer p-4 border-solid border-4 outline-none rounded-md' placeholder='please enter your email'  />
           <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p>
           <label htmlFor="" className=' text-lg  '>Message</label>
           <textarea className='border-solid border-2 focus:outline-none p-4 my-4' name="" id="" cols="30" rows="10"></textarea>
          </div>
         
          <button type='submit' className='p-2 mx-auto w-full text-xl bg-blue-500 rounded-xl text-white uppercase px-4 font-semibold'>Submit</button>
        </form> 
        </div>
      
       </div>  }
    </div>
  )
}

export default Modal