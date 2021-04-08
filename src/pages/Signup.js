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

  const nextStep = (event) => {
    event.preventDefault();
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    istrainer ? history.push("/signup/trainer") : history.push("/signup/user");
  };
  const onMenuClick = (event) => {
    setdrpdown(event.target.innerText);
    setrendermenu(!rendermenu);
  };
  const typeChangeHandler = (event) => {
    event.target.value === "trainer" ? settrainer(true) : settrainer(false);
  };
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
          <img className="logo" src="/assets/logo.PNG" />
          {istrainer && (
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
          <div className="input_ctr">
            <BsChatSquareDots color="#4a4a4a" />
            <input
              onChange={(event)=> {email=(event.target.value)}}
              type="email"
              placeholder="Email or mobile number"
              required
            ></input>
          </div>
          <div className="input_ctr">
            <RiLockPasswordLine color="#4a4a4a" />
            <input onChange={(event)=> {password=(event.target.value)}} type="password" placeholder="password" required></input>
          </div>
          <form onChange={(event) => typeChangeHandler(event)}>
            <p>Register yourself as:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input type="radio" name="type" value="customer" checked />
                customer
              </label>
              <label>
                <input type="radio" name="type" value="trainer" />
                Trainer
              </label>
            </div>
          </form>
          <button className="continue" type="submit">
            CONTINUE
          </button>
          <p className="tc">
            By Continuing you agree to the <a>Terms of Services </a>
            &nbsp;and&nbsp;
            <a>Privacy policy.</a>
          </p>
          <p className="continueWith">or countinue with</p>
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
