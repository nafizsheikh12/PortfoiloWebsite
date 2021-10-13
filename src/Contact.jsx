import React, { useRef } from 'react'
import emailjs from 'emailjs-com';


const Contact = () => {



   const sendEmail = (e) => {
   

       e.preventDefault();
       emailjs.sendForm('service_kj6wo21', 'template_1hchah8', e.target, 'user_DFdRh583zYjYjezcUfUpC')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
   
};
   return  <div className="contact p-5 " id="contact">
              <div className="container">
              <div className="acontent mb-5">
                 <h2>Get in Touch</h2>
                 <p>Feel free to contact me anytime</p>
              </div>
                  <form onSubmit={sendEmail}>
                       <input name="name" type="text" className="form-control mb-4" placeholder="Name"  aria-describedby="emailHelp"/>                
                       <input name="email" type="email" placeholder="Email" className="form-control mb-4" id="exampleInputPassword1"/>  
                       <input name="subject" type="text" placeholder="Subject" className="form-control mb-4" id="exampleCheck1"/>
                       <textarea name="message" type="text" placeholder="Message" className="form-control mb-4"></textarea>
                       <button type="submit" className="btn btn-primary custom-btn">Submit</button>
                  </form>
              </div>
          </div>
}

export default Contact;