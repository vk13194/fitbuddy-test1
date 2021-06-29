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
export default function About(){
    const history=useHistory();
    return (
        /*<div className={About_CSS.abt_container}>
            <div className={About_CSS.abt_fading_line_container_left}><div className={About_CSS.abt_fading_line_left}></div></div>
            <div className={About_CSS.abt_hexa_container}>
                <div className={About_CSS.abt_hexa_top}></div>
                <div className={About_CSS.abt_hexa_mid}><p>Our Purpose</p></div>
                <div className={About_CSS.abt_hexa_bottom}></div>
            </div>
        <div className={About_CSS.abt_fading_line_container_right}><div className={About_CSS.abt_fading_line_right}></div></div>
        <br></br>
        <br></br>
        <table className={About_CSS.abt_table}>
            <tr className={About_CSS.abt_table_heading}><td>Mission</td><td>Vision</td><td>Values</td></tr>
            <tr className={About_CSS.abt_table_content}><td>To make hyper personalized training experience affordable and accessible for everyone who inspires to have healthy life style</td>
            <td>Using pioneering technologies, FitBuddy will provide paradigm shift in way fitness enthusiasts engage with fitness regime to get the best outcome from every workout</td>
            <td>•	Companionship<br></br>
•	Professionalism<br></br>
•	Honesty & Integrity<br></br>
</td></tr>
        </table> 
        </div>*/
        <>
        {/* <div> */}
            <Navbar/>
        <div style={{"position":"absolute","display":"flex","padding":"20px","cursor":"pointer"}}>
              <img
                onClick={()=>history.push("/")}
                className={home.nav_logo}
                src="/assets/logo.png"
                alt="Fitbuddy"
              />
            </div>

        <div className={About_CSS.about_image_container}>
            
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
            <img src={image4}></img>
            <img src={image5}></img>
        </div>
        {/* </div> */}
    
        </>
        );
}