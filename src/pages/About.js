import React from "react";
import About_CSS from "./styles/about.module.css"
export default function About(){
    return (
        <div className={About_CSS.abt_container}>
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
        </div>
    );
}