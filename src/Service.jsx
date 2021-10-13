import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Service = (props) => {
  Aos.init()
    return <div className="col-lg-4 col-md-6 mb-5 " >
                <div class="card text-center p-3 shadow"  >
                  <div><i className={props.icon}></i></div>
                    <div class="card-body">
                      <h5 class="card-title">{props.title}</h5>
                      <p class="card-text">{props.dec}</p>
                    </div>
                </div>
          </div>
           
           
           
           

           
           
}


export default Service