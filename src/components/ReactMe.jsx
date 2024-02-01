import React, { useState } from 'react'
import cv from '../assets/cv.pdf.pdf';
import Modal from './Modal';

function ReactMe() {

  
  const [modal, setModal] = useState(false)


  // function handleModal (){
  //   setModal(!modal)
  // }


  return (
    <div id='contact' className='mt-20 flex flex-col justify-center items-center  '>
      <div className='flex flex-col gap-4 md:flex-row'>
      <h1 className=' text-center text-6xl font-semibold bg-gradient-to-b from-violet-700  via-blue-500 to-blue-200  text-transparent bg-clip-text  uppercase tracking-wide'>hit Me up ! </h1>
      <span className='text-5xl my-5 text-center md:text-right'>👇</span>
      </div>
     
     <p className='mt-5 opacity-60 font-semibold text-center'>Thank your for visiting my portfolio I hope that you like it :) keep on mind that this portfolio is still on building so keep your eyes on  </p>
        {/* <div className='flex  justify-center items-center gap-3'> 
            {/* <i class="fa-regular fa-envelope"></i>
            <h1 className='font-bold'>Mail :</h1>
            <p className='font-semibold'>kebbeyusuf@gmail.com</p>
            </div> */}
            <div className='flex flex-col  justify-around items-center gap-2 md:flex-row md:gap-20'> 
        <a href={cv} download="cv"className='mt-10 py-3 px-4 bg-gradient-to-b from-violet-700  via-blue-500 to-blue-300  text-white font-semibold rounded-lg uppercase text-xl hover:scale-110 transition-all'>Download my Cv</a>
        <button onClick={()=> setModal(true)}  className='mt-10 py-3 px-8 bg-gradient-to-b from-violet-700  via-blue-500 to-blue-300  text-transparent bg-clip-text font-semibold rounded-lg uppercase text-xl border-solid border-2 shadow-md  '>send me email</button>
        <Modal modal={modal} onClose= {()=> setModal(false)} /> 
            
        </div>
      
     
    </div>
  )
}

export default ReactMe
  {/* <form action="">
          <div className='input-field flex flex-col gap-2 w-1/2'>
        
           <label htmlFor="" className=' text-lg  '>Email</label>
           <input type="email" className='peer p-4 border-solid border-4 outline-none' placeholder='please enter your email'  />
           <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p>
           <label htmlFor="" className=' text-lg  '>Message</label>
           <textarea className='border-solid border-2 focus:outline-none p-4 my-4' name="" id="" cols="30" rows="10"></textarea>
          </div>
         
          <button type='submit' className='p-2 mx-auto bg-yellow-300 rounded-xl text-black uppercase px-4 font-semibold'>Submit</button>
        </form> */}