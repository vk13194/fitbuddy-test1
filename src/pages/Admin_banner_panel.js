import React from "react";
import {useState} from "react";
import admin from "./styles/admin.module.css"
import Navbar from "./Navbar";
export default function Admin_banner_panel(){
    const [homeBannerPC, setHomeBannerPC] = useState(false);
    const [homeBannerMobile, setHomeBannerMobile] = useState(false);
    function somethingSelected(event){
        if(event.target.value=="Home Screen Banners PC"){
            setHomeBannerPC(true);
            setHomeBannerMobile(false);
        }
        else if(event.target.value=="Home Screen Banners Mobile"){
            setHomeBannerMobile(true);
            setHomeBannerPC(false);
        }
        else
        {
            setHomeBannerMobile(false);
            setHomeBannerPC(false);
        }
    }
    function uploadImage(event){
        event.preventDefault();
        console.log("in");
        if(homeBannerMobile){
            var inputs=document.getElementById("homeBannerMobileSpan").getElementsByTagName("input");
            if(inputs[0].checked==true){
                console.log(inputs[0].value);
                console.log(document.getElementById("img").value);
            }
            else if(inputs[1].checked==true){
                console.log(inputs[1].value);                
            }
            else if(inputs[2].checked==true){
                console.log(inputs[2].value);
            }
            else{
                alert("Please Select the Banner");
            }
        }
        else if(homeBannerPC){
            var inputs=document.getElementById("homeBannerPCSpan").getElementsByTagName("input");
            if(inputs[0].checked==true){
                console.log(inputs[0].value);
                console.log(document.getElementById("img").value);
            }
            else if(inputs[1].checked==true){
                console.log(inputs[1].value);                
                var imageName=document.getElementById("img").value;
                console.log(imageName);
                if(imageName=="") alert("select image");
                else{
                    console.log("ready to upload");
                }
            }
            else if(inputs[2].checked==true){
                console.log(inputs[2].value);
            }
            else{
                alert("Please Select the Banner");
            }
    
        }
    }
return(
    <>
    <Navbar/>
    <form onSubmit={(event)=>{uploadImage(event)}} className={admin.admin_outer_form}>
        <select className={admin.drop_down_list} onChange={(event)=>{somethingSelected(event)}}>
            <option selected>&#60;Select Banner to Change&#62;</option>
            <option>Home Screen Banners PC</option>
            <option>Home Screen Banners Mobile</option>
        </select><br></br>
        {homeBannerPC && 
        <span id="homeBannerPCSpan">
        <input type="radio" name="homeBannerNumberPC" value="Banner 1"></input><p style={{"display":"inline"}}>Banner 1</p>&nbsp;&nbsp;
        <input type="radio" name="homeBannerNumberPC" value="Banner 2"></input><p style={{"display":"inline"}}>Banner 2</p>&nbsp;&nbsp;
        <input type="radio" name="homeBannerNumberPC" value="Banner 3"></input><p style={{"display":"inline"}}>Banner 3</p>&nbsp;&nbsp;
        </span>
        }
        {homeBannerMobile && 
        <span id="homeBannerMobileSpan">
        <input type="radio" name="homeBannerNumberMobile" value="Banner 1"></input><p style={{"display":"inline"}}>Banner 1</p>
        <input type="radio" name="homeBannerNumberMobile" value="Banner 2"></input><p style={{"display":"inline"}}>Banner 2</p>
        <input type="radio" name="homeBannerNumberMobile" value="Banner 3"></input><p style={{"display":"inline"}}>Banner 3</p>
        </span>
        }
        <br></br>
        {(  homeBannerMobile || homeBannerPC) &&
        <div> 
        <input className={admin.banner_input} type="file" id="img" name="img" accept="image/*"></input>
        <br></br>
        <button className={admin.banner_submission_button} type="submit"> Upload </button>
        </div>
        }

    </form>
    </>
)
}