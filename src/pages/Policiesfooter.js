import React from 'react'
import {Link} from 'react-router-dom'
const Policiesfooter = () => {
    return (
        <>
           <div className="policyfooter"
           style={{
               display: 'flex',
               alignItems:'center',
               
               backgroundColor:'black',
               color: 'white',
           }} 
           >
               <div className="tnc" style={{width:'100%',marginLeft:'250px'}}>
                   <Link to='/Terms_and_conditions' style={{textDecoration:'none',color:'whitesmoke'}}>
                       <h4>Terms and Conditions</h4>
                   </Link>
               </div>
               <div className="refund" style={{width:'100%'}}>
               <Link to='/privacy_policy' style={{textDecoration:'none',color:'whitesmoke'}}>
                       <h4>Refund policy</h4>
                   </Link>
               </div>
               <div className="privacypolicy" style={{width:'100%'}}>
               <Link to='/privacy_policy' style={{textDecoration:'none',color:'whitesmoke'}}>
                       <h4>Privacy Policy</h4>
                   </Link>
               </div>

            </div> 
        </>
    )
}

export default Policiesfooter
