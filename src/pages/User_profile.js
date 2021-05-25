import React from "react";
import User_Tabs from "../components/User_Tabs";
import { Sidebar } from "../components/styled/Sidebar";
import { User, TextInfo } from "../components/styled/profile/Profile";
import { FiUser } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { BsPlay, BsGraphUp, BsPlus } from "react-icons/bs";
import { BiDumbbell } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import { useHistory } from "react-router";
function checkStatus(data)
{
  console.log(data);
  console.log(data["name"]);
  console.log(data.age);
}
export default function User_profile() {
  let history=useHistory();
  let token=localStorage.getItem("token");
  console.log("Ran");
  if(token==null) 
  {
    alert("You need to log in First...");
    history.replace("/");
  }
  else
  {
    var link="https://staging-fitbuddy.herokuapp.com/api/customers/current/info";
    fetch(link,{
    method: "GET",
    headers: {
      "Content-type": "application/json",
      "x-access-token":token
    }
  }).then((res)=>res.json()).then((data)=>checkStatus(data));
  }
  return (
    <div>
      <Sidebar>
        <div className="content">
          <img
            src="https://www.verywellfit.com/thmb/U4ktWEzPgsf2xaj0ZouRF7UyPIk=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/serious-man-training-upper-body-using-fly-machine-1060869384-0effce7eff3044289055fcd16a9c6788.jpg"
            alt="profile"
            className="profile"
          />
          <div>
            <p className="name">User Name</p>
            <p className="designation">D.O.B</p>
          </div>
          <div className="options">
            <p>
              <FiUser className="icon" /> User Info
            </p>
            <p>
              <IoIosNotificationsOutline className="icon" /> My Progress
            </p>
            <p>
              <BsPlay className="icon" /> Suggestion Workout
            </p>
            <p>
              <BsGraphUp className="icon" /> Notification
            </p>
            <p>
              <BsPlus className="icon" /> Session Details
            </p>
          </div>
          <p onClick={()=>{localStorage.removeItem("token"); history.replace("/")}} className="logoutbtn">
            <BiDumbbell className="logout-ico" />
            Log out
          </p>
        </div>
      </Sidebar>
      <User>
        <div className="content">
          <div className="top-ctr">
            <img
              className="main-image"
              src="data:image/jpeg;base64,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"
            />
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
              <p className="about-text">
                Physical fitness is a state of health and well-being and, more
                specifically, the ability to perform aspects of sports,
                occupations and daily activites.
              </p>
            </TextInfo>
          </div>

          <div style={{ marginLeft: "0rem" }}>
            <div className="seperator" />
            <User_Tabs />
          </div>
        </div>
      </User>
    </div>
  );
}
