import React from "react";
import About_CSS from "./styles/about.module.css";
import home from "./styles/home.module.css";
import image1 from "./styles/About_Us_fitbuddy_images/About_Us_fitbuddy-1.jpg";
import image2 from "./styles/About_Us_fitbuddy_images/About_Us_fitbuddy-2.jpg";
import image3 from "./styles/About_Us_fitbuddy_images/About_Us_fitbuddy-3.jpg";
import image4 from "./styles/About_Us_fitbuddy_images/About_Us_fitbuddy-4.jpg";
import image5 from "./styles/About_Us_fitbuddy_images/About_Us_fitbuddy-5.jpg";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Policiesfooter from "./Policiesfooter";
export default function About(){
    const history=useHistory();
    return (
       <>
            <Navbar/>
            <div>
        <div style={{"position":"absolute","display":"flex","padding":"20px","cursor":"pointer"}}>
              <img
                onClick={()=>history.push("/")}
                className={home.nav_logo}
                src="/assets/newlogowhite1.png"
                alt="Fitbuddy"
              />
            </div>

        <div className={About_CSS.about_image_container}>
            
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
            <img src={image4}></img>
            <img src={image5}></img>
            <Policiesfooter/>
        </div>
       </div>
       
        </>
        );
}