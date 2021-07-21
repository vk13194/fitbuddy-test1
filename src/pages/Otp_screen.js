import react,{useState} from "react";
import os from "./styles/otp.screen.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Policiesfooter from "./Policiesfooter";
import { useHistory } from "react-router-dom";
export default function Otp_screen(){
    let something="xxxxxxxxxx"
   const [newOtp, setNewOtp]=useState()
   const history =useHistory()
   const otp=sessionStorage.getItem("otp")
   const changeOtp =(e)=>{
       setNewOtp(e.target.value)
   }
   console.log(newOtp)
   const handleSubmit=(e)=>{
       e.preventDefault()
      if(newOtp== otp){
       history.push("/signup/trainer");
      }else{
          history.push("/trainer_register");
      }

   }
    return (
        <>
        <Navbar/>
        <div className={os.main_frame}>
            <div className={os.fitbuddy_logo_container}><img src="/assets/logo.png"></img></div>
            <div className={os.otp_enter_message}><p>Please enter the one time password we just sent to {something} to continue</p></div>
            <div  className={os.otp_input}>
           <form onSubmit={handleSubmit}  >
            <div className={os.divOuter}>
            	<div className={os.divInner}>
            		<input className={os.partitioned} 
                    type="text" 
                    maxLength="6" value={newOtp} onChange={changeOtp} />
            	</div>
            </div>
            <button className={os.finish_button} type="submit" >FINISH</button><br></br><br></br>
            </form>
            <div><p className={os.didnt_receive_otp}>Didn't Receive OTP?</p><a className={os.otp_resend}>RESEND</a></div>
            <div className={os.trouble_logging_in}>Having trouble logging in?</div><br></br>
            <Link to="/">
            <button className={os.back_button}>Back</button>
            </Link>
        </div>
        </div>
        <Policiesfooter/>
        </>
    );
}