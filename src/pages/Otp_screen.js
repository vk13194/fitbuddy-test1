import react from "react";
import os from "./styles/otp.screen.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Otp_screen(){
    let something="xxxxxxxxxx"
    return (
        <>
        <Navbar/>
        <div className={os.main_frame}>
            <div className={os.fitbuddy_logo_container}><img src="/assets/logo.png"></img></div>
            <div className={os.otp_enter_message}><p>Please enter the one time password we just sent to {something} to continue</p></div>
            <div  className={os.otp_input}>
            <div className={os.divOuter}>
            	<div className={os.divInner}>
            		<input className={os.partitioned} type="text" maxlength="6" />
            	</div>
            </div>
            <button className={os.finish_button}>FINISH</button><br></br><br></br>
            <div><p className={os.didnt_receive_otp}>Didn't Receive OTP?</p><a className={os.otp_resend}>RESEND</a></div>
            <div className={os.trouble_logging_in}>Having trouble logging in?</div><br></br>
            <Link to="/">
            <button className={os.back_button}>Back</button>
            </Link>
        </div>
        </div>
        </>
    );
}