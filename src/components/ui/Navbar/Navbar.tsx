import React, { useState } from 'react'
import { ChildrenOnlyProps } from '../../libs/types'
import { Link } from 'react-router-dom'

export interface NavLinkProps {
   className?: string;
   href: string;
   children: React.ReactNode | string;
   props ?: React.HTMLAttributes<HTMLAnchorElement> ;
}

export interface NavMenuProps {
   children : React.ReactNode;
   props ?: React.HTMLAttributes<HTMLDivElement> ;
   position ?: "left" | "right"
}

export const Navbar : React.FC<ChildrenOnlyProps> = ({ children } : ChildrenOnlyProps) => {
  return (
    <nav className='w-full bg-white top-0 sticky py-3 flex items-center'>
      {children}
    </nav>
  )
}
export const NavMenu : React.FC<NavMenuProps> = ( props : NavMenuProps ) => {
   const [active, setActive] = useState<boolean>(false)
   const toggleNavbar = () => {
      if(window.innerWidth >= 768) return
      setActive(!active)
   }

   return (
      <>
         <div
            className="fixed md:hidden top-4 z-50 cursor-pointer right-4 w-8 h-6 flex flex-col justify-between">
            <input 
               onChange={toggleNavbar}
               checked={active}
               type="checkbox" 
               className='absolute z-50 size-8 opacity-0 cursor-pointer
               [&:checked_~_span:nth-child(2)]:rotate-45 [&:checked_~_span:nth-child(2)]:translate-y-[10px] [&:checked_~_span:nth-child(3)]:scale-x-0 [&:checked_~_span:nth-child(4)]:-rotate-45 [&:checked_~_span:nth-child(4)]:-translate-y-[10px]' />
            <span className='h-[4px] w-full transition-all duration-200 rounded-xl bg-black'></span>
            <span className='h-[4px] w-full transition-all duration-200 rounded-xl bg-black'></span>
            <span className='h-[4px] w-full transition-all duration-200 rounded-xl bg-black'></span>
         </div>
      
         <div 
            className={`fixed top-0 left-0 h-svh flex flex-col justify-center w-full md:static md:h-fit md:top-[unset] translate-x-[100%] md:translate-x-0 transition-all duration-300 md:left-[unset] bg-white  ${active && "translate-x-0"}`}>
           
            <div className={`flex gap-1 pr-5 items-center justify-center w-full  flex-col md:flex-row ${props.position == "right" ? "md:justify-end" : "md:justify-start"}`} {...props.props}>
               {props.children}
            </div>
         </div>
      </>
   )
}
export const NavLink : React.FC<NavLinkProps> = (props : NavLinkProps) => {
   return (
      <>
         <Link 
            className={`text-black py-2 px-4 w-full text-center rounded-sm md:w-auto hover:bg-black/10 ${props.className}`}
            to={props.href} 
            {...props.props}>
            {props.children}
         </Link>
      </>
   )
}

export const NavLogo : React.FC<ChildrenOnlyProps> = (props : ChildrenOnlyProps) => {
   return(
      <>
         <Link 
            className='mx-4'
            to={'/'}>
            {props.children}
         </Link>
      </>
   )
}