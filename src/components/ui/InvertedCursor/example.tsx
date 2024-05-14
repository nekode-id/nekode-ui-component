import React from 'react'
import InvertedCursor from "./InvertedCursor";

const InvertedCursorExample : React.FC = () => {

  return (
    <>  
      <main className="grid place-items-center min-h-svh w-full bg-black">
         <h1 className='capitalize font-bold text-xl md:font-4xl text-white'>Try to hover this text</h1>
      </main>
      <InvertedCursor />
    </>
  )
}

export default InvertedCursorExample