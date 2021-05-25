import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import {
  Trainer,
  TextInputs,
  ProfileImage,
  TickCtr,
} from "../components/styled/Registration.js";
import { TiTick } from "react-icons/ti";

export default function Trainer_details() {
  let gender="";
  let country="";
  let city="";
  let name="";
  let phoneNumber="";
  let age="";
  let height="";
  let weight="";
  let perSessionCharge="";
  let bio="";
  let experience;
/*              <label>
              <p>
                  PSC<p>(per Session Charge)</p>
                </p>
                <input placeholder="₹ 1500" type="number" onChange={(event)=>{perSessionCharge=event.target.value}}/>
              </label>
*/
function addExperienceRow(event){
  var session=document.getElementById("experienceRow").getElementsByTagName("label")[0].getElementsByTagName("select")[0].value;
  var experience=document.getElementById("experienceRow").getElementsByTagName("label")[1].getElementsByTagName("input")[0].value;
  console.log(session);
  console.log(experience);
  var backupLabel=document.getElementById("experienceRow");
  document.getElementById("experienceRow").remove();
  var outerspan=document.createElement("span");
  outerspan.style.display="flex";
  var label=document.createElement("label");
  var div=document.createElement("div");
  div.innerText=session;
  div.className="div_style";
  label.appendChild(div);
  outerspan.appendChild(label);
  label=document.createElement("label");
  div=document.createElement("div");
  div.innerText=experience + " years";
  div.className="div_style";
  label.appendChild(div);
  outerspan.appendChild(label);
  document.getElementById("outerDiv").appendChild(outerspan);
  document.getElementById("outerDiv").appendChild(backupLabel);
}
  return (
    <Trainer>
      <TextInputs>
        <div className="head">
          <HiOutlineArrowNarrowLeft />
          <p>Trainer Details</p>
          <HiOutlineArrowNarrowRight />
        </div>
        <div className="details">
          <div className="ctr_1">
            <p>Gender</p>
            <button id="male_gender_button" onClick={(event)=>{
              if(gender!="" && gender=="Male") {gender="";event.target.className="gender_unselected";}
              else if(gender=="") {gender="Male";event.target.className="gender_selected";}
              else if(gender=="Female") {gender="Male";document.getElementById("female_gender_button").className="gender_unselected";event.target.className="gender_selected";}
            }} className="gender_unselected" value="Male">Male</button>
            <button id="female_gender_button" onClick={(event)=>{
              if(gender!="" && gender=="Female") {gender="";event.target.className="gender_unselected";}
              else if(gender=="") {gender="Female";event.target.className="gender_selected";}
              else if(gender=="Male") {gender="Female";document.getElementById("male_gender_button").className="gender_unselected";event.target.className="gender_selected";}
            }} className="gender_unselected" value="Female">Female</button>
            <p>Name</p>
            <input type="text" placeholder="Fit XXXXXX" onChange={(event)=>{name=event.target.value}}/>
          </div>
          <div className="ctr_2">
            <p>Country, City</p>
            <input onChange={(event)=>{
              country=event.target.value.split(",")[0];
              city=event.target.value.split(",")[1];
            }}type="text" placeholder="India, New Delhi" />

            <p>Mobile Number</p>
            <input onChange={(event)=>{phoneNumber=event.target.value}} type="text" placeholder="+91 7800000000" />
          </div>
        </div>
      </TextInputs>
      <div className="lower_section">
        <div className="trainer_details">
          <div id="outerDiv">
            <div className="row_1">
              <label>
                <p>Age</p>
                <input placeholder="25" type="number" onChange={(event)=>{age=event.target.value}}/>
              </label>
              <label>
                <p>Height</p>
                <input placeholder="170cm" type="number" onChange={(event)=>{height=event.target.value}}/>
              </label>
              <label>
                <p>Weight</p>
                <input placeholder="50kg" type="number" onChange={(event)=>{weight=event.target.value}}/>
              </label>
            </div>

            <div className="row_2" id="experienceRow">
              <label>
                <p>Session</p>
                <select>
                  <option selected>&#60;select&#62;</option>
                  <option>Yoga</option>
                  <option>Aerobics</option>
                  <option>Weight loss</option>
                </select>
              </label>
              <label>
                <p>Experience</p>
                <input placeholder="4 years" type="number" onChange={(event)=>{experience=event.target.value}}/>
              </label>
              <label>
              <p>
                  Add
                </p>
                <button id="addButton" className="plus_button" onClick={(event)=>addExperienceRow(event)}><img src='/assets/plus_icon.png'></img></button>
              </label>
            </div>
          </div>
          <label className="label_txtarea">
            <p>Add. Bio. (150-300 words)</p>
            <textarea onChange={(event)=>{bio=event.target.value}} placeholder="“A certified fitness professional specializing in personal training and weight loss and serves clients in the greater Dallas area. He is accredited with the American Council of Exercise and the National Academy of Sports Medicine.”" />
          </label>
        </div>
        <div className="bottom_left_ctr">
          <ProfileImage>
            <label
              for="file-upload"
              class="custom-file-upload"
              style={{
                backgroundImage: `url()`,
              }}
            >
              <p> Profile Photo</p>
            </label>
            <input id="file-upload" type="file" />
          </ProfileImage>
          <TickCtr onClick={()=>alert(["name : "+name,
        "gender : "+gender,
        "Country : "+country,
        "city : "+city,
        "MobNum : "+phoneNumber,
        "age : "+age,
        "height : "+height,
        "weight : "+weight,
        "experience : "+experience,
        "persession : "+perSessionCharge,
        "bio : "+bio])}>
            <TiTick />
          </TickCtr>
        </div>
      </div>
    </Trainer>
  );
}
