import React from "react";
import { useState } from "react";
import admin from "./styles/admin.module.css";
import Navbar from "./Navbar";
export default function Admin_banner_panel() {
  const [homeBannerPC, setHomeBannerPC] = useState(false);
  const [homeBannerMobile, setHomeBannerMobile] = useState(false);
  function somethingSelected(event) {
    if (event.target.value == "Home Screen Banners PC") {
      setHomeBannerPC(true);
      setHomeBannerMobile(false);
    } else if (event.target.value == "Home Screen Banners Mobile") {
      setHomeBannerMobile(true);
      setHomeBannerPC(false);
    } else {
      setHomeBannerMobile(false);
      setHomeBannerPC(false);
    }
  }
  function uploadImage(event) {
    event.preventDefault();
    console.log("in");
    if (homeBannerMobile) {
      var inputs = document
        .getElementById("homeBannerMobileSpan")
        .getElementsByTagName("input");
      if (inputs[0].checked == true) {
        console.log(inputs[0].value);
        console.log(document.getElementById("img").value);
      } else if (inputs[1].checked == true) {
        console.log(inputs[1].value);
      } else if (inputs[2].checked == true) {
        console.log(inputs[2].value);
      } else {
        alert("Please Select the Banner");
      }
    } else if (homeBannerPC) {
      var inputs = document
        .getElementById("homeBannerPCSpan")
        .getElementsByTagName("input");
      if (inputs[0].checked == true) {
        console.log(inputs[0].value);
        console.log(document.getElementById("img").value);
      } else if (inputs[1].checked == true) {
        console.log(inputs[1].value);
        var imageName = document.getElementById("img").value;
        console.log(imageName);
        if (imageName == "") alert("select image");
        else {
          console.log("ready to upload");
        }
      } else if (inputs[2].checked == true) {
        console.log(inputs[2].value);
      } else {
        alert("Please Select the Banner");
      }
    }
  }
  return (
    <>
      {/* <Navbar/> */}
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
        <form
          onSubmit={(event) => {
            uploadImage(event);
          }}
          className={admin.admin_outer_form}
        >
          <select
            className={admin.drop_down_list}
            onChange={(event) => {
              somethingSelected(event);
            }}
            style={{
              outline: "none",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <option selected >Select Banner to Change</option>
            <option>Home Screen Banners PC</option>
            <option>Home Screen Banners Mobile</option>
          </select>{" "}
          <br></br>
          {homeBannerPC && (
            <span id="homeBannerPCSpan">
              <input
                type="radio"
                name="homeBannerNumberPC"
                value="Banner 1"
              ></input>
              <p style={{ display: "inline", lineHeight: "20px" }}>
                {" "}
                Banner 1{" "}
              </p>
              &nbsp;&nbsp;
              <input
                type="radio"
                name="homeBannerNumberPC"
                value="Banner 2"
              ></input>
              <p style={{ display: "inline", lineHeight: "20px" }}>Banner 2 </p>
              &nbsp;&nbsp;
              <input
                type="radio"
                name="homeBannerNumberPC"
                value="Banner 3"
              ></input>
              <p style={{ display: "inline", lineHeight: "20px" }}>Banner 3 </p>
              &nbsp;&nbsp;
            </span>
          )}
          {homeBannerMobile && (
            <span id="homeBannerMobileSpan">
              <input
                type="radio"
                name="homeBannerNumberMobile"
                value="Banner 1"
              ></input>
              <p style={{ display: "inline" }}>Banner 1</p>
              <input
                type="radio"
                name="homeBannerNumberMobile"
                value="Banner 2"
              ></input>
              <p style={{ display: "inline" }}>Banner 2</p>
              <input
                type="radio"
                name="homeBannerNumberMobile"
                value="Banner 3"
              ></input>
              <p style={{ display: "inline" }}>Banner 3</p>
            </span>
          )}
          <br></br>
          {(homeBannerMobile || homeBannerPC) && (
            <div>
              <input
                className={admin.banner_input}
                type="file"
                id="img"
                name="img"
                accept="image/*"
                style={{ marginTop: "10px", lineHeight: "15px" }}
              ></input>
              {/* UI for dpoing items , not yet functioning only the UI */}
              {/* <div className="dropit" 
        style={{
            height: '200px',
            width: '100%',
            marginTop:'20px',
            border: '2px dashed black',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
        }}
        >
         Drop the Items here
        </div> */}
              {/* --------------------------------------------------------------------------------------------------------------------------- */}
              <div
                className="urlinput"
                style={{
                  marginTop: "20px",
                  width: "90%",
                  lineHeight: "20px",
                }}
              >
                <input
                  type="url"
                  placeholder="enter the url of the image"
                  style={{
                    width: "100%",
                    height: "15px",
                    fontFamily: "Roboto",
                    color: "#333",
                    fontSize: "1.2rem",
                    margin: "0 auto",
                    padding: " 1.5rem 2rem",
                    borderRadius: " 0.2rem",
                    backgroundColor: " rgb(255, 255, 255)",
                    border: "none",
                    width: "90%",
                    display: " block",
                    borderBottom: "0.1rem solid ",
                  }}
                ></input>
              </div>

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
            </div>
          )}
        </form>
      </div>
    </>
  );
}
