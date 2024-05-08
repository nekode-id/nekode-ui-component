import React from 'react'
import InvertedCursor from "./InvertedCursor";

const InvertedCursorExample : React.FC = () => {
  return (
    <>  
      <main className="grid place-items-center min-h-svh">
         <h1 className='capitalize font-bold text-xl md:font-4xl'>Try to hover this text</h1>
      </main>
      <InvertedCursor />
    </>
  )
}

export default InvertedCursorExample