import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';

const About = () => {
    Aos.init()
    return <div className="about container mt-5 mb-4 " id="about">
                <div className="acontent mb-5" >
                   <h2 className="ef">About me</h2>
                   <p>Get to know me</p>
                </div>

                <div className="row" >
                   <div className="col-lg-5 ">
                       <img src="img/about.jpg" className="aimg"/>
                   </div>
                   <div className="col-lg-7">
                       <div className="content-book">
                           <h2>Who am i?</h2>
                           <h6>I'm Nafiz Sheikh, a Fullstack Web Developer</h6>
                           <p>I have more than 2 years of experience in Web designing/Developing and mobile application development. I'm an expert in.<br/>
                           1.Material UI & bootstrap<br/>
                           2.Fully Mobile responsive HTML coding<br/>
                           3.React js<br/>
                           4.Mern stack<br/>
                           5.Wordpress<br/>
                           I always ensure you about 100% work satisfaction.
                           </p>
                       </div>

                       <div className="row">
                           <div className="col-lg-6 aa">
                               <span>Name</span>: <p>Nafiz Sheikh</p><br/>
                               <span>Age</span>: <p>21</p><br/>
                           </div>

                           <div className="col-lg-6 aa">
                               <span>Email</span>: <p>nafizahmed265@gmail.com</p><br/>
                               <span>From</span>: <p>Dhaka,Bangladesh</p><br/>
                           </div>
                       </div>

                       <button className="btn btn-danger">My Work</button>
                   </div>

                   
                </div>


           </div>
}

export default About