import React from 'react'
import "./project.css"


const Project = () => {
  return (
    <>
        <div className="projectmaindiv">
            <div className="container">
                     <div  className="projectp mb-5 pt-5">
                         <h2>Project</h2>
                     </div>
                     <div className="row">
                        <div className="col-lg-3 col-md-6 mb-5 " >
                           <a href="https://metablogs.netlify.app" target="blank">
                            <div class="card  p-3 shadow cardp"  >
                                  <div class="card-body">
                                     <h5 class="card-title cardp-title">Metablog Website</h5>
                                     <p class="card-text card-web">Website</p>
                                  </div>
                             </div>
                            </a> 
                         </div>


                         <div className="col-lg-3 col-md-6 mb-5 " >
                           <a href="https://whatsapp-masterclone.netlify.app/" target="blank">
                            <div class="card  p-3 shadow cardp whatsapp"  >
                                  <div class="card-body">
                                     <h5 class="card-title cardp-title">Whatsapp Clone</h5>
                                     <p class="card-text card-web">Website</p>
                                  </div>
                             </div>
                            </a> 
                         </div>


                         <div className="col-lg-3 col-md-6 mb-5 " >
                           <a href="https://flipkart-masterclone.netlify.app/" target="blank">
                            <div class="card  p-3 shadow cardp flipkart"  >
                                  <div class="card-body">
                                     <h5 class="card-title cardp-title">Flikart Clone</h5>
                                     <p class="card-text card-web">Website</p>
                                  </div>
                             </div>
                            </a> 
                         </div>



                         <div className="col-lg-3 col-md-6 mb-5 " >
                           <a href="#">
                            <div class="card  p-3 shadow cardp brigate"  >
                                  <div class="card-body">
                                     <h5 class="card-title cardp-title">Brigate Website</h5>
                                     <p class="card-text card-web">Website</p>
                                  </div>
                             </div>
                            </a> 
                         </div>




                     

                     </div>
                     <button  className="btn btn-success githubbtn"><a href="https://github.com/nafizsheikh12" target="blank">Visit my github</a></button>
            </div>  
        </div>
    </>
  )
}

export default Project