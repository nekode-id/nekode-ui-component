

import React from "react";
import { ChildrenWithClass } from "../../libs/types";
import { cn } from "../../libs/utils";

export interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
   src: string;
   alt?: string;
   className?: string;
 }


export const Card : React.FC<ChildrenWithClass> = (props : ChildrenWithClass) => {
   return (
      <>
         <div className={cn("bg-white shadow-md rounded-md overflow-hidden", props.className)}>
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
               className={cn(`w-full h-[300px] object-cover`, props.className)}
               loading="lazy"/>
         </figure>
      </>
   )
}

export const CardBody : React.FC<ChildrenWithClass> = (props : ChildrenWithClass) => { 
   return (
      <>
         <div className={cn("p-4", props.className)}>
            {props.children}
         </div>
      </>
   )
}