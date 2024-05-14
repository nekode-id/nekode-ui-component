

import React from "react";
import { ChildrenOnlyProps } from "../../libs/types";

export interface CardImageProps {
   src: string;
   alt?: string;
   className?: string;
   imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
 }

export const Card : React.FC<ChildrenOnlyProps> = (props : ChildrenOnlyProps) => {
   return (
      <>
         <div className="bg-white shadow-md rounded-md overflow-hidden">
            {props.children}
         </div>
      </>
   )
}

export const CardImage : React.FC<CardImageProps> = (props : CardImageProps) => {
   return (
      <>
         <figure className="w-full h-full">
            <img 
               src={props.src}
               alt={props.alt || ""}
               {...props.imgProps}
               className={`w-full h-[300px] object-cover`}
               loading="lazy"/>
         </figure>
      </>
   )
}

export const CardBody : React.FC<ChildrenOnlyProps> = (props : ChildrenOnlyProps) => { 
   return (
      <>
         <div className="p-4">
            {props.children}
         </div>
      </>
   )
}