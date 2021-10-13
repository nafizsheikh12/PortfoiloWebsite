import {useEffet} from 'react'
import './App.css';
import "./responsive.css"
import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Contact from './Contact';
import Footer from './footer'
import Navbartwo from './Navbartwo';
import FeedBack from './FeedBack'
import Aos from 'aos'
import 'aos/dist/aos.css';
import ScrollArea from 'react-scrollbar'
import Service from './component/Appservice'
import Work from './component/Appwork'
import { BrowserRouter, Switch, Route } from 'react-router-dom';



const App = () => {
     Aos.init()

  return <> 
          <BrowserRouter>
             <Navbar/>
            <Navbartwo/>
            <div className="section-wrapper">
                <Home />
                <About />
                <Service/>
                <Work/>
                <FeedBack/>
                <Contact />
                 <Footer />
            </div>
            </BrowserRouter> 
        </>
}

export default App;
