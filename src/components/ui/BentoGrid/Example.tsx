

import React from 'react'
import BentoGrid from './BentoGrid'

const Example : React.FC = () => {
  return (
    <div className="mt-36 container mx-auto">
      <div className="">
         <h1 className='text-center mb-5 font-semibold text-4xl capitalize'>Bento grid 4 items</h1>
         <div className="">
            {/* by default its made 4 4 boxes/card */}
            <BentoGrid >
               {Array(4).fill(true).map((_,i) => (
                  <div className='grid place-items-center bg-stone-600 h-[200px]'>
                     <span className='font-bold text-4xl md:text-6xl'>{i + 1}</span>
                  </div>
               ))}
            </BentoGrid>
         </div>
      </div>
    </div>
  )
}

export default Example