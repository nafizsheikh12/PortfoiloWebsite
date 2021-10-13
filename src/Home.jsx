import React from 'react'
import Typical from 'react-typical'


const Home = () => {
    return <>
             <div className="home" id="home">
             
                     <div className="container">
                         <h1 className="home-name">Nafiz <span>Sheikh</span></h1>
                       <div className="wrapper">  
                             <p>I'm a <Typical loop={Infinity}
                                wrapper="b"
                                steps = {[
                                  'Freelancer',1000,'Developer',1000,"Designer",1000
                                ]}
                             /></p>
                        </div> 
                         <div className="deshbox">
                             
                         </div>
                     </div>
             </div>
           </>
}

export default Home;