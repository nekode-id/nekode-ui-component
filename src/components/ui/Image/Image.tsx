
import React from "react";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
   src : string;
   alt : string;
   width : number;
   height : number;
}

export default function Image( props : ImageProps) {
   return (
      <img 
         height={props.height}
         width={props.width}
         src={props.src}
         alt={props.alt}
          />
   )
}