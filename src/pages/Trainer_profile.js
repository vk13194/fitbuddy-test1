import React from "react";
import Trainer_Tabs from "../components/Trainer_Tabs";
import { Sidebar } from "../components/styled/Sidebar";
import { Trainer, TextInfo } from "../components/styled/profile/Profile";
import { FiUser } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { BsPlay, BsGraphUp } from "react-icons/bs";
import { BiDumbbell } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { useHistory } from "react-router";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
export default function Trainer_profile() {
  const history=useHistory();
  console.log(sessionStorage.getItem('email'));
  fetch('https://api.fitbuddy.co.in/TrainerLogin/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'  
    },
    body: JSON.stringify({  
      "action":"dashboard_data",
      "userid":sessionStorage.getItem("email"),
      'password':sessionStorage.getItem("password")
    })
    }).then((response) => response.json())
        .then((responseJson) => {
            // If server response message same as Data Matched
          //setTobecollected(responseJson.Message);
          console.log(responseJson.data[0]);
            if(responseJson.Message=="Login Successfully")
            {
              document.getElementById("trainer_name").innerHTML=responseJson.data[0].name;
              document.getElementById("trainer_image").src=responseJson.data[0].photo;
              document.getElementById("bio").innerHTML=responseJson.data[0].description;
            }
            else if(responseJson.status="404"){
              console.error("Some Error")
            }
        }).catch((error) => {
          // alert(error);
          console.error(error);
        });
  function displaySessionTimeScreen(){
    history.push("/session_timing");
  }
  function logout(){
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    history.replace("/");
  }
  
  return (
    <div>
      <Navbar/>
      <Sidebar>
        <div className="content">
          <img
          id="trainer_image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
            alt="profile"
            className="profile"
          />
          <div>
            <p id="trainer_name" className="name">Trainer Name</p>
            <p className="designation"></p>
          </div>
          <div className="options">
          <p>
              <BsPlay className="icon" /> Participants profile
            </p>
            <p onClick={()=>{displaySessionTimeScreen()}}>
              <AiOutlineSetting className="icon" /> Session Time
            </p>
            <p>
              <IoIosNotificationsOutline className="icon" /> Notification
            </p>
            <p>
              <FiUser className="icon" /> Trainer Info
            </p>
            <p>
              <BsGraphUp className="icon" /> Share
            </p>
          </div>
          <p className="logoutbtn" onClick={()=>logout()}>
            <BiDumbbell className="logout-ico" />
            Log out
          </p>
        </div>
      </Sidebar>
      <Trainer>
        <div className="content">
          <img
            className="main-image"
            src="https://images.unsplash.com/photo-1539794830467-1f1755804d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
          <div style={{ marginLeft: "2rem" }}>
            <TextInfo>
              <div className="top-ctr">
                <div>
                  <p className="name">FITBUDDY</p>
                  <p className="designation">Expert</p>
                </div>
                <button>
                  Edit Info <GrEdit />
                </button>
              </div>
              <p className="about">ABOUT</p>
              <p id="bio" className="about-text">
                Physical fitness is a state of health and well-being and, more
                specifically, the ability to perform aspects of sports,
                occupations and daily activites.
              </p>
            </TextInfo>
            <div className="seperator" />
            <Trainer_Tabs />
          </div>
        </div>
      </Trainer>
    </div>
  );
}
