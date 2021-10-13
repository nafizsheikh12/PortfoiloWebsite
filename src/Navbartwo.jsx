import React,{useState} from 'react'

const Navbartwo = () => {
        const [click,setclick] = useState('')
        const handleClick = () => {
                click ? setclick('') : setclick('unshow')
        }

 return <>
         <div className="n-2 bg-dark p-2">
                 <button className="btn btn-dark nav-btn" onClick={() => handleClick()}>Menu</button>

                 <div className={click || 'dropitem w-25'} >
                       <div className="item">      
                          <ul className="list-unstyled list-menu mt-3">
                              <li><a className="nav-link" href="#home">Home</a></li>
                              <li><a className="nav-link" href="#about">About</a></li>
                              <li><a className="nav-link" href="#service">Services</a></li>
                              <li><a className="nav-link">Portfoilo</a></li>
                              <li><a className="nav-link" href="#client">Clients</a></li>
                              <li><a className="nav-link">Blog</a></li>
                              <li><a className="nav-link" href="#contact">Contact</a></li>
                          </ul>
                       </div> 
                 </div>  

         </div>
        </> 
}

export default Navbartwo;