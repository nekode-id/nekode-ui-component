import React from 'react'
import "./bentoGrid.css"

interface BentoGridProps {
   variant ?:  4;
   children : React.ReactNode;
   props ?: React.HTMLProps<HTMLDivElement>
}

const BentoGrid : React.FC<BentoGridProps> = ({ variant, children, props} : BentoGridProps) => {
  switch (variant) {
      // case 2 :
      //    return (
      //       <div className="bento-grid-4" {...props}>
      //         {children}
      //       </div>
      //     )
      // case 6 :
      //       return (
      //          <div className="bento-grid-4" {...props}>
      //       {children}
      //    </div>
      //    )
      // case 8 :
      //       return (
      //          <div className="bento-grid-4" {...props}>
      //       {children}
      //    </div>
      //    )
      default :
         return (
            <div className="bento-grid-4" {...props}>
            {children}
            </div>
         )
      
  }
}

export default BentoGrid