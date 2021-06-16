import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../components/styled/Signup";
import Trainer_details from "./Trainer_details";
import User_details from "./User_details";
import { BsChatSquareDots } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineDown,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Signup() {
  let email;
  let password;
  let history = useHistory();
  const [istrainer, settrainer] = useState(false);
  const [drpdown, setdrpdown] = useState("indivisual or company");
  const [rendermenu, setrendermenu] = useState(false);
  const getStatus=(data,type)=>{
    //if(data.token!=null) localStorage.setItem("token",data.token);
    /*if(localStorage.getItem("token")!=null) history.replace("/user/profile");
    else
    {
      istrainer ? history.push("/signup/trainer") : history.push("/signup/user");
    }*/
    if(type=="trainer"){
    if(data.status=="404"){
      //The Trainer Doesn't exist and we can further move on to next step
      history.push("/signup/trainer");
    }
    else if(data.status="200"){
      console.log(data.data);
      alert("Trainer Already Exists !!")
      // Redirect it to The trainer page and Fill the data.
    }
    }
    else if(type=="user"){

    }
  }
  const nextStep = (event) => {
    event.preventDefault();
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    if(document.getElementsByName("type")[0].checked==true){

    }
    else if(document.getElementsByName("type")[1].checked==true){
      fetch("http://3.137.209.222:8000/Particulartrainer/",{
        method: "POST",
        headers: {
          "Content-type": "application/json" 
        },
        body : JSON.stringify({
          "userid" : email,
        })
      }).then((res)=>res.json()).then((data)=>getStatus(data,"trainer"));    
    }
    else{
      document.getElementById("select_type_label").style.display="block";
    }
    //Call to login for checking if trainer exist
  };
  const onMenuClick = (event) => {
    setdrpdown(event.target.innerText);
    setrendermenu(!rendermenu);
  };
  const typeChangeHandler = (event) => {
    console.log(event.target.value);
    event.target.value == "trainer" ? settrainer(true) : settrainer(false);
    document.getElementById("select_type_label").style.display="none";
  };
  /*          {istrainer && (
            <div
              className="dropdown"
              onClick={() => setrendermenu(!rendermenu)}
            >
              <p style={{ color: "#767676" }}>{drpdown}</p>
              <AiOutlineDown className="dropdown_ico" />
              {rendermenu && (
                <div className="dropdown_menu">
                  <div className="options">
                    <p onClick={(event) => onMenuClick(event)}>
                      indivisual or company
                    </p>
                    <p onClick={(event) => onMenuClick(event)}>second option</p>
                    <p onClick={(event) => onMenuClick(event)}>third option</p>
                    <p onClick={(event) => onMenuClick(event)}>fourth option</p>
                  </div>
                </div>
              )}
            </div>
          )}
*/
  return (
    <Container>
      <p className="decor_txt">
        Let's Begin Your
        <div style={{ display: "flex" }}>
          <p style={{ textShadow: "4px 4px 4px #0000004A" }}>FITBUDDY&nbsp;</p>
          Journey
        </div>
      </p>
      <img className="img_dec" src="/assets/login_img.png" alt="" />
      <div className="form_sec">
        <form className="form_ctr" onSubmit={(event) => nextStep(event)}>
          <img className="logo" src="/assets/logo.png" />
          <div className="input_ctr">
            <BsChatSquareDots color="#4a4a4a" />
            <input
              onChange={(event)=> {email=(event.target.value)}}
              type="text" //previously type="email"
              placeholder="Email or mobile number"
              required
            ></input>
          </div>
          <div className="input_ctr">
            <RiLockPasswordLine color="#4a4a4a" />
            <input onChange={(event)=> {password=(event.target.value)}} type="password" placeholder="password" required></input>
          </div>
          <form onChange={(event) => typeChangeHandler(event)} >
            <p>Register yourself as:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input type="radio" name="type" value="customer" />&nbsp;
                Customer
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input type="radio" name="type" value="trainer" />&nbsp;
                Trainer
              </label>
            </div>
            <p id="select_type_label" style={{color:"red",display:"none"}}>Please Select Trainer or User</p>
          </form>
          <button className="continue" type="submit">
            CONTINUE
          </button>
          <p className="tc">
            By Continuing you agree to the <a>Terms of Services </a>
            &nbsp;and&nbsp;
            <a>Privacy policy.</a>
          </p>
          <p className="continueWith">or continue with</p>
          <div className="media_ctr">
            <AiFillGoogleCircle />
            <AiFillTwitterCircle />
            <FaFacebook />
          </div>
        </form>
      </div>
    </Container>
  );
}
