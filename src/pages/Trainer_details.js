import React,{useState} from "react";
import * as blobUtil from 'blob-util';
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
import {useHistory} from "react-router-dom";
export default function Trainer_details() {
  const [photo,setPhoto]= useState("");
  let gender="";
  let country="";
  let city="";
  let name="";
  let phoneNumber="";
  let age="";
  let height="";
  let weight="";
  let bio="";
  let experience='{';
  let history=useHistory();
/*              <label>
              <p>
                  PSC<p>(per Session Charge)</p>
                </p>
                <input placeholder="₹ 1500" type="number" onChange={(event)=>{perSessionCharge=event.target.value}}/>
              </label>
*/
/*{
  "userid": localStorage.getItem("email");
  "password": localStorage.getItem("password");
  "name": name,
  "gender": gender,
  "Country":country,
  "city":city,
  "MobNum":phoneNumber,
  "age":age,
  "height":height,
  "weight":weight,
  "experience": experience,
  "persession":perSessionCharge,
  "profilePhoto":link,
  "bio":bio
}*/

function addExperienceRow(event){
  var session=document.getElementById("experienceRow").getElementsByTagName("label")[0].getElementsByTagName("select")[0].value;
  var exp=document.getElementById("experienceRow").getElementsByTagName("label")[1].getElementsByTagName("input")[0].value;
  console.log(session);
  console.log(exp);
  var expRow=session +":"+exp+',';
  experience=experience+expRow;
  sessionStorage.setItem("experience",experience);
  console.log(expRow);
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
  div.innerText=exp + " years";
  div.className="div_style";
  label.appendChild(div);
  outerspan.appendChild(label);
  document.getElementById("outerDiv").appendChild(outerspan);
  document.getElementById("outerDiv").appendChild(backupLabel);
}
function encodeImageFileAsURL(element) {
  var file = element.files[0];
  if(file!=undefined)
  {
  var filename=element.value.slice(12);
  console.log(filename);
  var extension=filename.substring(filename.lastIndexOf('.')+1, filename.length);
  var type="image/"+extension.toLowerCase();
  document.getElementById("profile_label").style.backgroundImage="url("+URL.createObjectURL(file)+")";
  var reader = new FileReader();
  reader.onloadend = function(e) {
    var arrayBuffer=e.target.result;
    console.log(arrayBuffer);
    /*var blob=blobUtil.arrayBufferToBlob(arrayBuffer,type);
    console.log(blob);
    setPhoto(blob);
    console.log(blobUtil.createObjectURL(blob));
    console.log(blob.text());*/
    setPhoto(arrayBuffer.toString());
  }
  reader.readAsDataURL(file);
}
else{
  document.getElementById("profile_label").style.backgroundImage="url('')";
}
}
/*function proceedToNext()
{
  if(gender=="") {
    console.log("Select Gender");
    document.getElementById("select_gender_error_label").style.display="block";
}
  else if(name=="") {
    console.log("Name Required");
    document.getElementById("name_input").focus();
  }
  else if(country=="" || city=="") {
    if(country=="" && city=="") {
      console.log("City and Country Required");
      document.getElementById("city_country_input").focus();
    }
    else if(city=="") {
      console.log("City Required");
      document.getElementById("city_country_input").focus();
    }
    else {
      console.log("Country Required");
      document.getElementById("city_country_input").focus();
    }
  }
  else if(phoneNumber==""){
    
  }
  var filename=document.getElementById("file-upload").value.slice(12);
  var file=document.getElementById("file-upload");
  var extension=filename.substring(filename.lastIndexOf('.')+1, filename.length);
  var newFile=new File([file],"something1"+"."+extension.toLowerCase(),{type: "image/"+extension.toLowerCase()});
 //document.getElementById("file-upload").value=document.getElementById("file-upload").value.replace(filename,"something1"+extension);
var newFileName = file.filename + "new";
  var formData = new FormData();
//  formData.append('file',file.files[0], newFileName);
  //document.getElementById("display_img").src=URL.createObjectURL(formData.files[0]);
  newFileName="something1."+extension;

  console.log(newFile);
  console.log(file);
  // alert(["name : "+name,
  // "email :"+sessionStorage.getItem("email"),
  // "password :"+sessionStorage.getItem("password"),
  // "gender : "+gender,
  // "Country : "+country,
  // "city : "+city,
  // "MobNum : "+phoneNumber,
  // "age : "+age,
  // "height : "+height,
  // "weight : "+weight,
  // "experience : "+experience.replace(/,\s*$/, "")+"]}",
  // "persession : "+perSessionCharge,
  // //"profilePhoto : "+link,
  // "bio : "+bio]);
console.log(sessionStorage.getItem("email").toString());

  fetch("http://3.137.209.222:8000/TrainerReg/",{
    method: "POST",
    headers: {
      "Content-type": "application/json" 
    },
    body : {
      "userid": sessionStorage.getItem("email").toString(),
  "password": sessionStorage.getItem("password"),
  "name": name,
  "gender": gender,
  "country":country,
  "city":city,
  "mobileno":phoneNumber,
  "age":age,
  "height":height,
  "weight":weight,
  "experience": experience,
  "description":bio,
  "photo":file
    }
  }).then((res)=>res.json()).then((data)=>{console.log("hell");console.log(data);});   
}*/
const TrainerReg = () => {

  alert("test");
if(document.getElementById("male_gender_button").className=="gender_selected"){
  gender="Male";
}
else if(document.getElementById("female_gender_button").className=="gender_selected"){
  gender="Female";
}
name=document.getElementById("name").value;
country=document.getElementById("city_country_input").value.split(",")[0];
city=document.getElementById("city_country_input").value.split(",")[1];
phoneNumber=document.getElementById("mobileno").value;
age=document.getElementById("age").value;
weight=document.getElementById("weight").value;
height=document.getElementById("height").value;
experience=sessionStorage.getItem("experience");
bio=document.getElementById("bio").value;

if(gender=="") {
  console.error("Select Gender");
  document.getElementById("select_gender_error_label").value="Select Gender";
  document.getElementById("select_gender_error_label").style.display="block";
}
else if(name=="") {
  console.error("Name Required");
  document.getElementById("name").focus();
}
else if(country=="" || city=="") {
  if(country=="" && city=="") {
    console.error("City and Country Required");
    document.getElementById("city_country_input").focus();
  }
  else if(city=="") {
    console.error("City Required");
    document.getElementById("city_country_input").focus();
  }
  else {
    console.error("Country Required");
    document.getElementById("city_country_input").focus();
  }
}
else if(phoneNumber==""){
  console.error("Phone Number Required");
  document.getElementById("mobileno").focus();
}
else if(bio==""){
  console.error("Bio Required");
  document.getElementById("bio").focus();
}
else{

alert(JSON.stringify({
  
  "action":"dashboard_data",
  "userid":sessionStorage.getItem("email"),
  'password':sessionStorage.getItem("password"),
  'name': name.toString(),
'gender': gender.toString(),
'country':country,
'mobileno':phoneNumber.toString(),
'age':age.toString(),
'height':height.toString(),
'weight':weight.toString(),
'experience': experience.replace(/,\s*$/, "")+"}",
'description':bio,

}));
if(document.getElementById("male_gender_button").className=="gender_selected"){
  gender="Male";
}
else if(document.getElementById("female_gender_button").className=="gender_selected"){
  gender="Female";
}
name=document.getElementById("name").value;
country=document.getElementById("city_country_input").value.split(",")[0];
city=document.getElementById("city_country_input").value.split(",")[1];
phoneNumber=document.getElementById("mobileno").value;
age=document.getElementById("age").value;
weight=document.getElementById("weight").value;
height=document.getElementById("height").value;
experience=sessionStorage.getItem("experience");
bio=document.getElementById("bio").value;

fetch('http://3.137.209.222:8000/TrainerReg/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  
  },
  body: JSON.stringify({
  
    "action":"dashboard_data",
    "userid":sessionStorage.getItem("email"),
    'password':sessionStorage.getItem("password"),
    'name': name,
    'gender': gender,
  'country':country,
  'mobileno':phoneNumber,
  'age':age,
  'height':height,
  'weight':weight,
  'experience': experience.replace(/,\s*$/, "")+"}",
  'description': bio,
  'photo':photo
  })
}).then((response) => response.json())
.then((responseJson) => {
  // If server response message same as Data Matched
  //setTobecollected(responseJson.Message);
  alert(responseJson.Message);  
  if(responseJson.status=="200")
    {
      console.log(responseJson.data);
      //history.push("/trainer/profile");
    }
    else
    {
      alert(responseJson.Message);  
    }
}).catch((error) => {
  // alert(error);
  console.error(error);
});
}//else ends here
document.getElementById("loading_label").style.display="block";
console.log("out");
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
                  document.getElementById("select_gender_error_label").style.display="none";
              if(gender!="" && gender=="Male") {gender="";event.target.className="gender_unselected";}
              else if(gender=="") {gender="Male";event.target.className="gender_selected";}
              else if(gender=="Female") {gender="Male";document.getElementById("female_gender_button").className="gender_unselected";event.target.className="gender_selected";}
            }} className="gender_unselected" value="Male">Male</button>
            <button id="female_gender_button" onClick={(event)=>{
                  document.getElementById("select_gender_error_label").style.display="none";
              if(gender!="" && gender=="Female") {gender="";event.target.className="gender_unselected";}
              else if(gender=="") {gender="Female";event.target.className="gender_selected";}
              else if(gender=="Male") {gender="Female";document.getElementById("male_gender_button").className="gender_unselected";event.target.className="gender_selected";}
            }} className="gender_unselected" value="Female">Female</button><br></br><label id="select_gender_error_label" style={{display:"none",color:"red"}}>Select Gender</label>
            <p>Name</p>
            <input id="name" type="text" placeholder="Fit XXXXXX" onChange={(event)=>{name=event.target.value}}/>
          </div>
          <div className="ctr_2">
            <p>Country, City</p>
            <input id="city_country_input" onChange={(event)=>{
              country=event.target.value.split(",")[0];
              city=event.target.value.split(",")[1];
              if(city==undefined) city="";
            }}type="text" placeholder="India, New Delhi" />

            <p>Mobile Number</p>
            <input id="mobileno" onChange={(event)=>{phoneNumber=event.target.value}} type="text" placeholder="+91 7800000000" />
          </div>
        </div>
      </TextInputs>
      <div className="lower_section">
        <div className="trainer_details">
          <div id="outerDiv">
            <div className="row_1">
              <label>
                <p>Age</p>
                <input id="age" placeholder="25" type="number" onChange={(event)=>{age=event.target.value}}/>
              </label>
              <label>
                <p>Height</p>
                <input id="height" placeholder="170cm" type="number" onChange={(event)=>{height=event.target.value}}/>
              </label>
              <label>
                <p>Weight</p>
                <input id="weight" placeholder="50kg" type="number" onChange={(event)=>{weight=event.target.value}}/>
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
                <input placeholder="4 years" type="number" />
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
            <textarea id="bio" onChange={(event)=>{bio=event.target.value}} placeholder="“A certified fitness professional specializing in personal training and weight loss and serves clients in the greater Dallas area. He is accredited with the American Council of Exercise and the National Academy of Sports Medicine.”" />
          </label>
        </div>
        <div className="bottom_left_ctr">
          <ProfileImage>
            <label
              for="file-upload"
              id="profile_label"
              class="custom-file-upload"
              style={{
                backgroundImage: `url()`,
              }}
            >
              <p> Profile Photo</p>
            </label>
            <input id="file-upload" type="file" accept="image/*" onChange={()=>{encodeImageFileAsURL(document.getElementById("file-upload"));}}/>
          </ProfileImage>
          <label id="loading_label" style={{"display":"none"}}>Please wait Uploading....</label>
          <TickCtr onClick={()=>{TrainerReg()}}>
            <TiTick />
          </TickCtr>
        </div>
      </div>
    </Trainer>
  );
}
