import React from "react";
import { useState ,useEffect} from "react";
import admin from "./styles/admin.module.css";
export default function Admin_banner_panel() {
    const [submitdone,setsubmitdone]=useState(0)
  
     useEffect(() => {
    
      const droparea = document.querySelector(".droparea");

      droparea.addEventListener("dragover", (e) => {
        console.log('inside drop area');
        e.preventDefault();
        droparea.classList.add(admin.hover);
      });
      droparea.addEventListener("dragleave", () => {
        droparea.classList.remove(admin.hover);
      });
      droparea.addEventListener("drop", (e) => {
        e.preventDefault();
        const image = e.dataTransfer.files[0];
          return upload(image);
      });
      const upload = (image) => {
        droparea.innerText = "Added " + image.name;
      };
  },[]);











  function handlesubmit(e){
    e.preventDefault();
    const myimg=document.getElementById('img');
    const myform = document.getElementById('myform');
    const endpoint="http://3.137.209.222:8000/ImageUpload/";
    const formData = new FormData();
    console.log(myimg.files)
    formData.append('file',myimg.files[0]);
    console.log(formData);
    fetch(endpoint,{
      method : 'POST',
      body :formData
    }).then((res)=>{
      console.log(res);
      if(res.status==200){
        setsubmitdone(1);
        myform.reset();
      }
    }).catch((error)=>{console.log('error->' ,error);})
  }

 



  return (
    <>
      
      <div
        className="bannerselect"
        style={{
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
        }}
      >
        <form id="myform"
          className={admin.admin_outer_form} onSubmit={(e)=>handlesubmit(e)}
        >
              <input
                className={admin.banner_input}
                type="file"
                id="img"
                name="file"
                style={{ marginTop: "10px", lineHeight: "15px" }}
               ></input>
              {
               submitdone===1?<h3>iamge uploaded</h3>:null
              }
              <hr />
              <div className="orstatement" 
              style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
              >OR</div><hr />
              <br /><br />
             <div class="droparea" id="dnd" style={{
                height: '250px',
                width:' 300px',
                border: '1px dashed gray',
                color: 'gray',
                display:' flex',
                justifyContent: 'center',
                alignItems:' center',
             }}>Drop the Image Here</div>
               <br />
               <button
                className={admin.banner_submission_button}
                type="submit"
                style={{
                  marginTop: "20px",
                  display: "block",
                  marginLeft: "100px",
                  fontWeight: "bold",
                  width: '100px',
                  height: '40px',
                  backgroundColor:'Highlight',
                  color: 'white',
                  border: 'none',
                  boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                }}
              >
                Upload
              </button>
              
        </form>
      </div>
    </>
  );
 
  
}
