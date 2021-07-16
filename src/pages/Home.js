import React, { useRef, useState, useEffect } from "react";
import Slider from "infinite-react-carousel";
import Session_card from "../components/Session_card";
import ReactCardCarousel from "react-card-carousel";
import { motion, useAnimation } from "framer-motion";
import Carousels from "react-elastic-carousel";
import Marquee from "react-fast-marquee";
import { useInView } from "react-intersection-observer";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  FaRegUserCircle,
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaTwitterSquare,
  FaFacebook,
} from "react-icons/fa";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import {
  AiOutlineMessage,
  AiFillLinkedin,
  AiFillStar,
  AiFillYoutube,
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillGooglePlusCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { IoIosTimer } from "react-icons/io";
import { FiSend, FiMenu } from "react-icons/fi";
import "./styles/carousal.css";
import home from "./styles/home.module.css";
// import location from "/assets/location.png";
/*
After Line 708

      <div className={home.vw_4}>
        <div className={home.vw_4_overlay} />
        <p className={home.mem_txt}>MEMBERSHIP</p>
        <Carousels
          className={home.mem_carousal}
          itemsToShow={window.innerWidth < 650 ? 1 : 3}
          style={{ position: "absolute", top: "18rem" }}
          // enableAutoPlay={true}
          // autoPlaySpeed={3000}
          showArrows={false}
        >
          {membership.map((plan) => {
            return (
              <div className={home.membership_card}>
                <img src={plan.img} />
                <p className={home.plan_name}>{plan.name}</p>

                <div className={home.mem_duration}>
                  <IoIosTimer
                    color="#499e99"
                    style={{ alignSelf: "center", marginRight: "0.4rem" }}
                  />
                  {plan.duration}
                  &nbsp;&nbsp;<p style={{ color: "#499e99" }}>₹</p>
                  <p> {plan.price}</p>
                </div>
                <p className={home.ssn_time_by_you}>Session time by you</p>
                <p style={{ padding: "0 1rem" }}>
                  {window.innerWidth < 650
                    ? plan.description.slice(0, 84)
                    : plan.description.slice(0, 120)}
                  ...
                </p>
                <button className={home.plan_readbtn}>READ MORE</button>
              </div>
            );
          })}
        </Carousels>
      </div>

      in className=home.navigations
                    <p>
                <img className={home.icon} src="/assets/live.png" alt="" /> LIVE
              </p>

*/
let loginEmail = "";
let loginPassword = "";
function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

function VideoCtr() {
  return (
    <div className={`${home.vw_3_ctr_2} v_ctr`}>
      <div className={home.vw_3_video_frame}>
        <div className={home.vw_3_pre_video}>
          WHY FITBUDDY DIFFERENT TO OTHERS
        </div>
        <div className={home.video_ctr}>
          <video
            id="my-player"
            controls
            preload="auto"
            poster="/assets/logocopy.png"
          >
            <source
              src="../../videos/video_demo_1.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div className={home.vw_3_post_video}>WHY JOIN FITBUDDY</div>
      </div>
    </div>
  );
}
// New Function by Amber
/*  function checkIfLoggedIn()
  {
    console.log("Null");
    var item=localStorage.getItem("token");
  if(item!=null) 
  {
    var role=JSON.parse(atob(item.split(".")[1])).role;
    if(role == "customer")
    {
      document.getElementById("redirectToUserProfileButton").click();
    }
    else if(role == "trainer")
    {
      document.getElementById("redirectToTrainerProfileButton").click();
    }
  }
  }

  .....Extra stuff from above>>>>
                <source
                src="//vjs.zencdn.net/v/oceans.webm"
                type="video/webm"
              ></source>
              <source
                src="//vjs.zencdn.net/v/oceans.ogv"
                type="video/ogg"
              ></source>
              
                <ul>
                <li>Time crunch? </li>
                <li>Money crunch?</li>
                <li>Incorrect techniques?</li>
                <li>Far away gym?</li>
                <li>Social Distancing?</li>
              </ul>

              <div className={home.img_txt}>
                <span className={home.img_txt_1}>What Stops You To Be</span>
                <br />
                <span className={home.img_txt_2}>Fit & Healthy</span>
              </div>
              
                        <div className={home.best_txt}>
            <span className={home.best_fitbuddy}>Best Fitbuddy</span>
            <br />
            <span className={home.best_lower_ctr}>
              <span className={home.best_session}>Sessions</span>
              <HiOutlineArrowNarrowRight size="5rem" />
            </span>
          </div>
<a style={{ cursor: "pointer" }}
              target="_blank"
              href="https://www.iiitd.ac.in/">
            <img
              className={home.client_logos}
              src="https://www.iiitd.ac.in/sites/default/files/images/logo/style1colorlarge.jpg"
              alt="client"
            />
            </a>

*/
/*function checkStatus(responseJson, type) {
  console.log("check status");
  //if(data.token) localStorage.setItem("token",JSON.stringify(data.token));
  sessionStorage.setItem("email", document.getElementById("email").value);
  sessionStorage.setItem("password", document.getElementById("password").value);
  console.log(responseJson);
  if (type == "trainer") {
    if (responseJson.Message == "Login Successfully")
      document.getElementById("redirectToTrainerProfileButton").click();
    else {
      var errorLabel = document.getElementById("loginErrorLabel");
      errorLabel.innerHTML = responseJson.Message;
      errorLabel.hidden = false;
    }
  } else if (type == "user") {
    if (responseJson.Message == "Login SuccessFully")
      document.getElementById("redirectToUserProfileButton").click();
    else {
      var errorLabel = document.getElementById("loginErrorLabel");
      errorLabel.innerHTML = responseJson.Message;
      errorLabel.hidden = false;
    }
  }
}
/*function checkForAuthenticity(event) {
  fetch("http://3.137.209.222:8000/TrainerLogin/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "dashboard_data",
      userid: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      checkStatus(responseJson, "trainer");
    });

  fetch("http://3.137.209.222:8000/UserLogin/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action: "dashboard_data",
      userid: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      checkStatus(responseJson, "user");
    });
}*/

export default function Home() {
  let history = useHistory();
  //var token = localStorage.getItem("token");
  const [userid, setUserid] = useState();
  const [password, setPassword] = useState();
  //console.log(token);
  /*if (token != null) {
    var role = JSON.parse(atob(token.split(".")[1])).role;
    if (role == "customer") {
      history.replace("/user/profile");
    } else if (role == "trainer") {
      history.replace("/trainer/profile");
    }
  }*/

  function CONTAINER_STYLE() {
    return {
      position: "relative",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  }
  const Carousel = useRef();

  const card_data = [
    {
      label: "Strength Workouts",
      description:
        "Strength workouts for increasing strength, controlling body fat and enhancing quality of life",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#66b2b2",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Yoga",
      description:
        "Yoga for increasing your flexibility, stamina and maintaining balanced metabolism as well as cardio and circulatory health",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#a1c3c4",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Aerobic & Zumba",
      description:
        "Aerobic for reducing health risks, maintaining a healthy weight, strengthening your heart and boosting your mood",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#69bb59",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    /*
    {
      label: "Fitness",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#a8c046",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Fitness",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#66b2b2",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Fitness",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#a1c3c4",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Fitness",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#a8c046",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      label: "Fitness",
      description:
        "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy.",
      trainer_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT7rmu1NFGRRwcM1eqcS0ftdNVPOa2zI2FA&usqp=CAU",
      trainer: "Trainer Name",
      card_color: "#69bb59",
      thumb_image:
        "https://images.unsplash.com/photo-1572459815294-26edc555608e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM3fHx0cmFpbmVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },*/
  ];
  const poster =
    "data:image/jpeg;base64,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";
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const membership = [
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //"In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      // description:
      //   "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      // description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
    {
      name: "Session Name",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      price: 1599,
      duration: "3 months",
      //description:
      //  "In publishing and graphic design, form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    },
  ];

  const customer_reviews = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShybRW4HuzTzpy7lHkPjVM8T25H_nDHSjpJg&usqp=CAU",
      /*txt: `"In publishing and graphic design, Lorem ipsum is a placeholder
      text commonly used to demonstrate the visual form of a document or
      a typeface without relying on meaningful content. Lorem ipsum may
      be used as a placeholder before final copy is available"`,
    */
    },
    {
      img: "data:image/jpeg;base64,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",
      /*txt: `"In publishing and graphic design, Lorem ipsum is a placeholder
      text commonly used to demonstrate the visual form of a document or
      a typeface without relying on meaningful content. Lorem ipsum may
      be used as a placeholder before final copy is available"`,
    */
    },
    {
      img: "data:image/jpeg;base64,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",
      /*txt: `"In publishing and graphic design, Lorem ipsum is a placeholder
      text commonly used to demonstrate the visual form of a document or
      a typeface without relying on meaningful content. Lorem ipsum may
      be used as a placeholder before final copy is available"`,
    */
    },
  ];
  const [rendermenu, setrendermenu] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [myData, setMyData]= useState()
  const[loading, setLoading]=useState(true)
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://3.137.209.222:8000/login/", {
        userid,
        password,
      });
      console.log(res.data.data)
      window.localStorage.setItem("auth", JSON.stringify(res.data.data));
      dispatch({ type: "LOGIN_TRAINER", payload: res.data.data });
      history.push("/user_profile")
    } catch (err) {
      console.log(err.message);
    }
  };
 useEffect(()=>{
   const fetchData =async()=>{
     const res = await axios.get('http://3.137.209.222:8000/slider/')
     console.log('hhhhhhhhhhhhh',res.data.data)
     setMyData(res.data.data)
    setLoading(false)
   }
   fetchData()
 },[])
 console.log('dddddddddddddddd',myData) 
 console.log(loading)
  return (
    <div className={home.main_ctr}>
      <div className={home.vw_1}>
        <div className={home.fixed_ctr}>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className={home.join_fixed}>Join now</button>
          </Link>
          <button className={home.feedback_fixed}>Feedback</button>
        </div>
        <div className={home.ctr1}>
          <img
            className={home.nav_logo_mobile}
            src="/assets/logo.png"
            alt="Fitbuddy"
          />
          <FiMenu
            className={home.mobile_menu}
            color="#a3bb33"
            onClick={() => setrendermenu(!rendermenu)}
          />
          {rendermenu && (
            <div className={home.p_menu_ctr}>
              <p>
                <img className={home.icon} src="/assets/about.png" alt="" />
                ABOUT
              </p>
              <p>
                <img className={home.icon} src="/assets/session.png" alt="" />
                PACKAGES
              </p>
              <p>
                <img className={home.icon} src="/assets/trainer.png" alt="" />
                TRAINER REGISTRATION
              </p>
              <p>
                <img className={home.icon} src="/assets/contact.png" alt="" />
                CONTACT US
              </p>
            </div>
          )}
          <div className={home.nav}>
            <div>
              <img
                className={home.nav_logo}
                src="/assets/logo.png"
                alt="Fitbuddy"
              />
            </div>
            <div className={home.navigations}>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <p>
                  <img className={home.icon} src="/assets/about.png" alt="" />
                  ABOUT
                </p>
              </Link>
              <p>
                <img className={home.icon} src="/assets/session.png" alt="" />
                PACKAGES
              </p>
              <p>
                <img className={home.icon} src="/assets/trainer.png" alt="" />
                TRAINERS REGISTRATIONS
              </p>
              <p>
                <img className={home.icon} src="/assets/contact.png" alt="" />
                CONTACT US
              </p>
            </div>
          </div>
          
       

          <Slider
            className={home.carousal}
            dotsClass="carousel-dots"
            dots
            autoplay={true}
            arrows={false}
            swipe={false}
          >
            
         {loading ? <h3>loding...</h3>: 
         myData.map(item=>
          <div key={item.id}>
            <img src={`https://api.fitbuddy.co.in/image/${item.image}`} />
          </div>
           )
         
         }

        
           {/* <div className={home.carousel_image1}></div>
            <div className={home.carousel_image2}>
              <span className={home.carousel_image2_txt}></span>
            </div>
           <div className={home.carousel_image3}></div> */}
          </Slider>
          
          <div className={home.ctr1_line}>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className={home.join_btn_ctr1}>
                <img src="assets/join.png" />
                JOIN NOW
              </button>
            </Link>
          </div>
        </div>
        <div className={home.ctr2}>
          <div className={home.nav2}>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <button className={home.join_btn}>
                <img src="assets/join.png" />
                JOIN NOW
              </button>
            </Link>
            <button className={home.login_btn}>
              <FaRegUserCircle className={home.user_ico} />
              LOGIN NOW
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={home.trial_ctr}>
              <p>7 DAYS FREE TRIAL</p>
              <div className={home.trial_inp}>
                <AiOutlineMessage color="grey" />
                <input
                  id="email"
                  onChange={(e) => {
                    setUserid(e.target.value);
                  }}
                  type="text"
                  placeholder=" Mobile number"
                />
              </div>
              <div className={home.trial_inp}>
                <FaRegUserCircle color="grey" />
                <input
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <label
                id="loginErrorLabel"
                className={home.login_error_label}
                hidden="true"
              ></label>
              <button
               
                className={home.trial_login}
                type="submit"
              >
                Login
              </button>
              <Link to="/user/profile">
                <button id="redirectToUserProfileButton" hidden="true"></button>
              </Link>
              <Link to="/trainer/profile">
                <button
                  id="redirectToTrainerProfileButton"
                  hidden="true"
                ></button>
              </Link>
              <div className={home.line_ctr}>
                <p>or login with</p>
              </div>
              <div className={home.trial_media_ctr}>
                <FaFacebookSquare
                  className={home.trial_media}
                  color="#0f517e"
                />
                <FaGooglePlusSquare
                  className={home.trial_media}
                  color="#c21513"
                />
                <FaTwitterSquare className={home.trial_media} color="#2a9bce" />
              </div>
            </div>
          </form>
          <br></br>
          <br></br>
          <Slider
            className={home.carousal2}
            dotsClass="carousel-dots"
            dots
            // autoplay
          >
            <video id="my-player" controls preload="auto" poster={poster}>
              <source
                src="../../videos/video_demo_1.mp4"
                type="video/mp4"
              ></source>
            </video>
          </Slider>
        </div>
      </div>
      <div className={home.vw_2}>
        <div className={home.line_nav}>
          <div className={home.txt1}>
            <p className={home.vw_2_our}>Our</p>
            <p className={home.vw_2_session}> Session</p>
          </div>
          <button>All Session</button>
        </div>

        <ReactCardCarousel
          ref={Carousel}
          style={CONTAINER_STYLE}
          // autoplay={true}
          autoplay_speed={5000}
        >
          {card_data.map((obj, i) => {
            let j = 0;
            j == 3 && (j = 0);
            return (
              <Session_card
                label={obj.label}
                description={obj.description}
                thumb_image={obj.thumb_image}
                trainer_image={obj.trainer_image}
                trainer={obj.trainer}
                color={obj.card_color}
              />
            );
          })}
        </ReactCardCarousel>
        <HiOutlineArrowNarrowRight
          className={home.arr_right}
          color="#a3bb33"
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "60%",
            zIndex: 9,
            cursor: "pointer",
          }}
          onClick={() => Carousel.current.next()}
        />
        <HiOutlineArrowNarrowLeft
          className={home.arr_left}
          color="#a3bb33"
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "60%",
            zIndex: 9,
            cursor: "pointer",
          }}
          onClick={() => Carousel.current.prev()}
        />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={home.vw_3}
      >
        <div className={home.vw_3_ctr_1}>
          <FadeInWhenVisible>
            <motion.div className={home.vw_3_txt} variants={item}>
              <p className={home.vw_3_why}> Why Join</p>
              <p className={home.v3_fitbuddy}>FITBUDDY</p>
            </motion.div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={home.vw_3_txt_box}>
              <img src="/assets/real_time_posture_correction.png" />
              <div>
                <p className={home.vw_3_txt_box_line1}>
                  Real time Posture Correction
                </p>
                <p className={home.vw_3_txt_box_line2}>
                  Get assisted by AI driven virtual trainer to keep a watch over
                  your workout techniques and give real time alerts for any
                  deviation
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={home.vw_3_txt_box}>
              <img src="/assets/repetition_set_calorie_count.png" />
              <div>
                <p className={home.vw_3_txt_box_line1}>
                  Repetition / Set & calorie count
                </p>
                <p className={home.vw_3_txt_box_line2}>
                  Let the app do the counting part of your reps, sets and
                  calorie of the workout so that you can focus only on the
                  intensity part
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={home.vw_3_txt_box}>
              <img src="/assets/complete_fitness_log.png" />
              <div>
                <p className={home.vw_3_txt_box_line1}>Complete fitness log</p>
                <p className={home.vw_3_txt_box_line2}>
                  Get Week-on-Week / Month-on-Month progress chart to keep a
                  check on your progress
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className={home.vw_3_txt_box}>
              <img src="/assets/anytime_anywhere_fitness.png" />
              <div>
                <p className={home.vw_3_txt_box_line1}>
                  Anytime & Anywhere fitness
                </p>
                <p className={home.vw_3_txt_box_line2}>
                  With FitBuddy, now the fitness is on your figure tips. Get
                  your favorite workout anytime anywhere
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        <VideoCtr />
      </motion.div>
      <div className={home.vw_5}>
        <div className={home.vw_5_s1}>
          <Slider
            className={home.review_slider}
            dotsClass="carousel-dots"
            dots={false}
            autoplay
            arrows={false}
          >
            {customer_reviews.map((obj) => {
              return (
                <>
                  <img className={home.vw_5_s1_bakimg} src={obj.img} />
                  <div className={home.vw_5_img_ctr}>
                    <div className={home.stars}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <img className={home.vw_5_s1_profile} src={obj.img} />
                    <div className={home.stars}>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                  <div className={home.vw_5_s1_line}></div>
                  <p className={home.vw_5_review_txt}>
                    {window.innerWidth < 650
                      ? `${obj.txt.slice(0, 64)}..."`
                      : obj.txt}
                  </p>
                </>
              );
            })}
          </Slider>
          <p className={home.review_txt}>WHAT CUSTOMER SAY</p>
        </div>
        <div className={home.vw_5_s2}>
          <div className={home.vw_5_s2_txt}>
            <p>OUR</p>
            <span>PARTNER</span>
          </div>
          <div className={home.vw_5_s2_line} />
          <Marquee
            // itemsToShow={7}
            enableAutoPlay={false}
            // autoPlaySpeed={1000}
            // showArrows={false}
            gradientColor={[163, 187, 51]}
            gradient={true}
            className={home.client_logos_ctr}
          >
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://siicincubator.com/"
            >
              <img
                className={home.client_logos}
                src="https://res.cloudinary.com/dwmwpmrpo/image/upload/v1614845119/FIRST_Logo_pouuq0.png"
                alt="client"
              />
            </a>
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://www.indiaaccelerator.co/"
            >
              <img
                className={home.client_logos}
                src="data:image/jpeg;base64,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"
                alt="client"
              />
            </a>
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://www.prithvi.ai/"
            >
              <img
                className={home.client_logos}
                src="https://static.wixstatic.com/media/f7ea70_8bcf0469ecf441b482bf90115a65d043~mv2.jpg/v1/fill/w_294,h_302,al_c,lg_1,q_80/f7ea70_8bcf0469ecf441b482bf90115a65d043~mv2.webp"
                alt="client"
              />
            </a>
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              href="https://iiitdic.in/"
            >
              <img
                className={home.client_logos}
                src="https://cdn.shortpixel.ai/client/q_lqip,ret_wait,w_183,h_60/https://iiitdic.in/wp-content/uploads/2020/04/incubation.png"
                alt="client"
              />
            </a>
          </Marquee>
        </div>
        <div className={home.vw_5_s3}>
          <p className={home.vw_5_s3_join}>JOIN US</p>
          <div className={home.vw_5_s3_line} />
          <div className={home.vw_5_inp_ctr}>
            <input placeholder="Enter your email"></input>
            <FiSend className={home.airplane} />
          </div>
          <div className={home.vw_5_s3_r1}>
            <div
              className={home.vw_5_call}
              style={{ display: "flex", alignItems: "center" }}
            >
              <BiPhoneCall
                color="#a4ba33"
                size={window.innerWidth < 650 ? "1rem" : "2.1rem"}
              />
              &nbsp;&nbsp;+91 8178094692
            </div>

            <p>
              {window.innerWidth < 650 ? "Follow us" : "Follow on Social Media"}
            </p>
            <div
              className={`${home.follow_media_icons} ${home.phone_media_icons}`}
              style={{
                color: "#a3bb33",
                fontSize: "2.2rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaFacebook className={home.follow_icons} />
              <AiFillTwitterCircle className={home.follow_icons} />
              <AiFillGooglePlusCircle className={home.follow_icons} />
              <AiFillInstagram className={home.follow_icons} />
              <AiFillLinkedin className={home.follow_icons} />
              <AiFillYoutube className={home.follow_icons} />
            </div>
            <div className={`${home.avilable_app_ctr} ${home.HD_media_icons}`}>
              <img src="/assets/app_store.png" />
              <img src="/assets/google_play.png" />
            </div>
          </div>
          <div className={home.vw_5_s3_r2}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineMail
                color="#a4ba33"
                size={window.innerWidth < 650 ? "1rem" : "2.1rem"}
              />
              &nbsp;&nbsp;<p>admin@fitbuddy.co.in</p>
            </div>

            <div
              className={`${home.follow_media_icons} ${home.HD_media_icons}`}
              style={{
                color: "#a3bb33",
                fontSize: "2.2rem",
                display: "flex",
                alignItems: "center",
                width: "25rem",
              }}
            >
              <FaFacebook className={home.follow_icons} />
              <AiFillTwitterCircle className={home.follow_icons} />
              <AiFillGooglePlusCircle className={home.follow_icons} />
              <AiFillInstagram className={home.follow_icons} />
              <AiFillLinkedin className={home.follow_icons} />
              <AiFillYoutube className={home.follow_icons} />
            </div>
            <img src="/assets/payment_options.png" alt="payment options" />
          </div>
          <div className={home.vw_5_s3_r3}>
            <p onClick={() => history.push("/terms_and_conditions")}>
              Terms & Conditions
            </p>
            <p style={window.innerWidth < 650 ? {} : { paddingRight: "8rem" }}>
              Refund Policy
            </p>
            <p onClick={() => history.push("/privacy_policy")}>
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCtr };
