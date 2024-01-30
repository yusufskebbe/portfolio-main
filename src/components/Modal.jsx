import React, { useState } from 'react'

function Modal({modal,onClose}) {


  
  return (
   
    <div >
       {modal && <div className='w-[100vw] h-[100vh] inset-0 bg-gray-500 z-50 fixed'>Modal</div>  }
    </div>
  )
}

export default Modal