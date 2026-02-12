import React from 'react'


export default function Modal({children,onClose}) {
  return (
   <>

   <div className="backdrop" onClick={onClose}></div>
    <dialog className="modal" open> 
        <h1>Hello</h1> 
        {children}

    </dialog>

   
   </>

  )
}
