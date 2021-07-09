import React from 'react';
import home from "./styles/home.module.css";
import { Link ,useHistory,useLocation} from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
const Navbar = () => {
    const history=useHistory();
    const location=useLocation();
    return (
        <>
        <div  style={{
        position: "sticky",
        height:'5vh',
         color:"whitesmoke",
         backgroundColor: "black",
         border: "2px solid black",
         paddingBottom:"15px",
         width: "100%",
         position: "sticky",
         top: '0',
         zIndex: "100000000"
        }}>
        <ul 
        style={{
          display: "flex",
         alignItems:"center",
         justifyContent:"space-around",
         listStyleType: "none",
        
        }}
        >   
       {
         location.pathname !== '/' ? 
         (<div>
           <Link to='/' style={{color:'white'}}><span><AiFillHome/></span></Link>
         </div>):null
       }
            
            <Link  to="/about" style={{textDecoration:'none'}}>
            <li style={{ cursor: "pointer",textDecoration:'none',color:'white'}} ><img className={home.icon} src="/assets/about.png" alt="a" />ABOUT</li>
            </Link>
            <Link style={{textDecoration:'none'}}>
            <li style={{ cursor: "pointer",textDecoration:'none',color:'white'}}><img className={home.icon} src="/assets/session.png" alt="p" />PACKAGES</li>
            </Link>
            <Link to="/trainer_register" style={{textDecoration:'none'}}>
            <li style={{ cursor: "pointer",textDecoration:'none',color:'white'}}><img className={home.icon} src="/assets/trainer.png" alt="tr" />TRAINERS LOGIN/SIGNUP</li>
            </Link>
            <Link style={{textDecoration:'none'}}>
            <li style={{ cursor: "pointer",textDecoration:'none',color:'white'}}><img className={home.icon} src="/assets/contact.png" alt="cs" />CONTACT US</li>
            </Link>
        </ul>
      </div>  
        </>
    )
}

export default Navbar
