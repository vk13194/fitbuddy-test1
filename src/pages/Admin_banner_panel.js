import React from "react";
import { useState } from "react";
import admin from "./styles/admin.module.css";
export default function Admin_banner_panel() {
  
  
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
          // backgroundColor:'black'
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
