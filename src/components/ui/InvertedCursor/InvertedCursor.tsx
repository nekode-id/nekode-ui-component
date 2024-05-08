
import React, { useEffect, useMemo, useRef } from "react"
import "./invertedCursor.css"

const InvertedCursor : React.FC = () => {

   const cursorRef = useRef<null | HTMLDivElement>(null)

   // array of all textual elements like H1,P .etc
   const textualElements = useMemo(() => ["H1","H2", "H3","H4","H5","H6", "A", "BUTTON", "svg", "path"],[])

   useEffect(() => {
      if(typeof window !== "undefined") {
         window.addEventListener("mousemove", (e : MouseEvent) => {
            const { clientX, clientY, target } = e
            if (cursorRef.current) {
               cursorRef.current.style.left = (clientX) + "px"
               cursorRef.current.style.top = (clientY) + "px"
            }
   
            if(textualElements.includes((target as HTMLElement).tagName)){
               cursorRef.current?.classList.add("active-cursor")
            }else{
               cursorRef.current?.classList.remove("active-cursor")
            }
   
         })
      }
   }, [textualElements])

   return (
      <>
         <div 
            ref={cursorRef} 
            className="hidden transition duration-150 ease-linear md:block size-5 z-0 bg-transparent border border-white mix-blend-difference  fixed top-0 rounded-full pointer-events-none -translate-x-2/4 -translate-y-2/4"></div>
      </>
   )
}

export default InvertedCursor