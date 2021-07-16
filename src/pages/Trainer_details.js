import React,{useState} from "react";
import * as blobUtil from 'blob-util';
import './styles/Trainerdetails.css';
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
import Navbar from "./Navbar.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import axios from 'axios'
import {useDispatch} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
export default function Trainer_details() {
  const [photo,setPhoto]= useState("");
  let gender="";
  let country="";
  let name="";
  let phoneNumber="";
  let age="";
  let height="";
  let weight="";
  let bio="";
  let experience='';
  let history=useHistory();
  const classes = useStyles();
  const [city,setcity]=useState("Mumbai")
  const handleChange = (event) => {
    setcity(event.target.value);
    console.log(city);
  }
  const dispatch =useDispatch()
const addExperienceRow= async(event)=>{
  var session=document.getElementById("experienceRow").getElementsByTagName("label")[0].getElementsByTagName("select")[0].value;
  var exp=document.getElementById("experienceRow").getElementsByTagName("label")[1].getElementsByTagName("input")[0].value;
  
  if(session==='Yoga' ){
    session=1
  }
  if(session==='Aerobics' ){
    session=2
  }
  if(session==='Weight loss' ){
    session=3
  }
let userid=sessionStorage.getItem("email")
const res = await axios.post('http://api.fitbuddy.co.in/Experience/',{exerciseid:session,experience:exp,trainer_id:userid})
console.log('ressssss',res)
  console.log('sseeonjhfruf',session);
  console.log('ygdygeyfefegfus',exp);
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
  console.log(experience);
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
    setPhoto(arrayBuffer.toString());
    console.log(arrayBuffer.toString());
  }
  reader.readAsDataURL(file);
}
else{
  document.getElementById("profile_label").style.backgroundImage="url('')";
}
}
const TrainerReg = () => {

  alert("test");
if(document.getElementById("male_gender_button").className=="gender_selected"){
  gender="Male";
}
else if(document.getElementById("female_gender_button").className=="gender_selected"){
  gender="Female";
}
name=document.getElementById("name").value;
country=document.getElementById("city_country_input").value;
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
'description':bio,

}));
if(document.getElementById("male_gender_button").className=="gender_selected"){
  gender="Male";
}
else if(document.getElementById("female_gender_button").className=="gender_selected"){
  gender="Female";
}
name=document.getElementById("name").value;
country=document.getElementById("city_country_input").value;
phoneNumber=document.getElementById("mobileno").value;
age=document.getElementById("age").value;
weight=document.getElementById("weight").value;
height=document.getElementById("height").value;
experience=sessionStorage.getItem("experience");
bio=document.getElementById("bio").value;
experience = experience + "}";
console.log(experience);
fetch('https://api.fitbuddy.co.in/TrainerReg/', {
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
  'description': bio,
  'photo':photo,
   "city": city,
   "experience":JSON.stringify({experience})
  })
}).then((response) => response.json())
.then((responseJson) => {
  // If server response message same as Data Matched
  //setTobecollected(responseJson.Message);
  if(responseJson.status=="200")
    {
      window.localStorage.setItem("auth", JSON.stringify(responseJson.data));
      dispatch({ type: "LOGIN_TRAINER", payload: responseJson.data });
      console.log('trainerloginstatus',responseJson.status);
      console.log(responseJson.data);
      history.push("/trainer/profile");
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
const [open, setOpen] = useState(false);
const handleClose = () => {
  setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
};
  return (
    <>
    <Navbar/>
    <Trainer>
      <TextInputs>
        <div className="head" style={{border:'5px solid #8cc63e',width:'500px',borderRadius:'20px'}}>
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
              country=event.target.value
            }}type="text" placeholder="India" />
            
            <div style={{
              // marginRight:'200px'
            }}>
            <p>Mobile Number</p>
            <input id="mobileno" onChange={(event)=>{phoneNumber=event.target.value}} type="text" placeholder="+91 7800000000" />
            </div>
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
          {/* <button onClick={()=>{console.log(experience + "}")}}>clik me </button> */}
          <label className="label_txtarea">
            <p>Add. Bio. (150-300 words)</p>
            <textarea id="bio" onChange={(event)=>{bio=event.target.value}} placeholder="“A certified fitness professional specializing in personal training and weight loss and serves clients in the greater Dallas area. He is accredited with the American Council of Exercise and the National Academy of Sports Medicine.”" 
          style={{
            width: "800px"
          }} />
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
          <TickCtr onClick={TrainerReg}>
            <TiTick />
          </TickCtr>
        </div>
      </div>
    </Trainer>
    </>
  );
}



















