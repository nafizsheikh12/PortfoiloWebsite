import Service from '../Service'

const Appservice = () => {

    return (
        <>
                <div className="service mt-5" id="service">
                 <div className="container">
                     <div  className="acontent mb-5 pt-5">
                         <h2>My Service</h2>
                         <p>Service i offer to my clients</p>
                     </div>
                     <div className="row">
                     <Service  icon="fab fa-html5" title="Wordpress Website" dec="We build wordpress website, and customization and designing . personal or business purpose "/>
                     <Service  icon="fab fa-wordpress" title="Web Development" dec="We build, create & maintainence any types of Website  personal or business purpose."/>
  
                     <Service  icon="fab fa-react" title="React Website" dec="We build react js website, and customization and designing . personal or business purpose "/>

                     <Service   icon="fab fa-node-js" title="Mern  Stack" dec="We build Mern stack application.fully responsive mobile friendly."/>
                     </div>
                  </div>  
                </div>

        </>
    )
}

export default Appservice