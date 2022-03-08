import React from 'react'
import Footer from './footer';
import {Link} from 'react-router-dom'
import Service from './component/Appservice'

 const Navbar = () => {
    return (
      
       
            <div className="navbarr">
                <div className="navContent">
                    <img src="img/pro.jpg" className="rounded"/>
                    <span className="mt-3">Nafiz Sheikh</span>
                    <p>Available for work</p>
                </div>
               <div className="items">      
                <ul className="list-unstyled list-menu text-center">
                    <li>  <a className="nav-link"  href="#home">Home</a> </li> 
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#service">Services</a></li>
                    <li><a className="nav-link" href=".projectp" >Project</a></li>
                    <li><a className="nav-link" href="#client">Clients</a></li>
                    <li><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
               </div> 
            </div>

                            
        
        
        
    )
}


export default Navbar;