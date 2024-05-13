import React from 'react'
import { Navbar, NavLink, NavMenu, NavLogo } from './Navbar'

const navLinks =[
   {
      href : "/",
      text : "Home"
   },
   {
      href : "/about",
      text : "About"
   },
   {
      href : "/contact",
      text : "Contact"  
   },
   {
      href : "/portfolio",
      text : "portfolio"
   }
]

const NavbarPage : React.FC = () => {
  return (
   <main className="container mx-auto">
      <Navbar>
         <NavLogo>
            <h1 className="font-bold text-lg uppercase">Nekode</h1>
         </NavLogo>
         <NavMenu position='left'>
            {navLinks.map((item) => (
               <NavLink 
                  className="capitalize"
                  key={item.href}
                  href={item.href}>
                  {item.text}
               </NavLink>
            ))}
         </NavMenu>
      </Navbar>
   </main>
  )
}

export default NavbarPage