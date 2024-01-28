import React from 'react'

function ReactMe() {
  return (
    <div className='mt-40'>
      <h1 className='text-center text-4xl font-semibold uppercase'>Reach Me</h1>
      <div>
        <form action="">
          <div className='input-field flex flex-col gap-2 w-1/2'>
        
           <label htmlFor="" className=' text-lg  '>Email</label>
           <input type="email" className='peer p-4 border-solid border-4 outline-none' placeholder='please enter your email'  />
           <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">Please provide a valid email address.</p>
           <label htmlFor="" className=' text-lg  '>Message</label>
           <textarea className='border-solid border-2 focus:outline-none p-4 my-4' name="" id="" cols="30" rows="10"></textarea>
          </div>
         
          <button type='submit' className='p-2 mx-auto bg-yellow-300 rounded-xl text-black uppercase px-4 font-semibold'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ReactMe