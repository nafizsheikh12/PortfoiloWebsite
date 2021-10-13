import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


const FeedBack = (props) => {
  Aos.init()
    return <div className="FeedBack" id="client">
                <div className="container">
                   <div className="text1" data-aos='fade-right'>
                        <h2 className="testimonials">CLIENT TESTIMONIALS</h2>
                        <p>We are very content and happy wan all the work Nafiz Sheikh has done for us! Not only did he just what he had to do, comes up with suggestions and improvements of his owns and points out weaknesses which he in perfect communication is able to improve. Recommended!</p>

                        <h6>Jason Sindram - CTO at DP-Websolutions</h6>
                   </div>

                   <div className="text1" data-aos='fade-left'>
                        
                        <p>Superb. Great comms, understood the requirement, and delivered quickly. Multiple revisions allowed which were very helpful. I will work with him again.</p>

                        <h6>Bhavesh Patel - CEO at Ganlaxgroup</h6>
                   </div>
                </div>
          </div>
           
           
           
           

           
           
}


export default FeedBack