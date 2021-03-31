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

export default function Trainer_profile() {
  return (
    <div>
      <Sidebar>
        <div className="content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
            alt="profile"
            className="profile"
          />
          <div>
            <p className="name">Trainer Name</p>
            <p className="designation">Yoga Expert</p>
          </div>
          <div className="options">
            <p>
              <FiUser className="icon" /> Trainer Info
            </p>
            <p>
              <IoIosNotificationsOutline className="icon" /> Notification
            </p>
            <p>
              <AiOutlineSetting className="icon" /> Session Time
            </p>
            <p>
              <BsPlay className="icon" /> Participants profile
            </p>
            <p>
              <BsGraphUp className="icon" /> Share
            </p>
          </div>
          <p className="logoutbtn">
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
              <p className="about-text">
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
