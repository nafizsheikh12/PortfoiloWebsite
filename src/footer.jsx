import React from 'react'

const footer = () => {
    return  <footer className="footer" id="footer">
                <div className="container ">
                 <div className="row conten pb-4 text-center">
                     <div className="col-lg-4 text-center footer-content">
                         <i className="far fa-map"></i>
                         <p>Dhaka,Bangladesh</p>
                     </div>

                     <div className="col-lg-4 text-center footer-content">
                         <i className="fas fa-phone"></i>
                         <p>+880 1875799476</p>
                     </div>

                     <div className="col-lg-4 text-center footer-content">
                        <i className="fas fa-share"></i>
                        <p>nafizahmed265@gmail.com</p>
                    </div>
                 </div>

                 <div className="row">
                     <div className="col-lg-9"></div>
                     <div className="col-lg-3 ">Made By Nafiz Sheikh</div>
                 </div>
                 </div>
           </footer>
}

export default footer