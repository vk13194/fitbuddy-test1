import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../components/styled/Signup";
import Trainer_details from "./Trainer_details";
import User_details from "./User_details";
import { BsChatSquareDots } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import extra from "./styles/extra.css";

import {
  AiOutlineDown,
  AiFillGoogleCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function Signup() {
  let history = useHistory();
  const [istrainer, settrainer] = useState(false);
  const [drpdown, setdrpdown] = useState("indivisual or company");
  const [rendermenu, setrendermenu] = useState(false);
  const [seen, setSeen]= useState(false);
  const [seen2, setSeen2] =useState(false);
  const getStatus=(data,type)=>{
    //if(data.token!=null) localStorage.setItem("token",data.token);
    /*if(localStorage.getItem("token")!=null) history.replace("/user/profile");
    else
    {
      istrainer ? history.push("/signup/trainer") : history.push("/signup/user");
    }*/
    if(type=="trainer"){
    if(data.status=="404"){
      //The Trainer Doesn't exist and we can further move on to next step
      history.push("/signup/trainer");
    }
    else if(data.status="200"){
      console.log(data.data);
      alert("Trainer Already Exists !!")
      // Redirect it to The trainer page and Fill the data.
    }
    }
    else if(type=="user"){

    }
  }
  const nextStep = (event) => {
    event.preventDefault();
    //sessionStorage.setItem("email",email);
    //sessionStorage.setItem("password",password);
    console.log(sessionStorage.getItem("email"));
    if(document.getElementsByName("type")[0].checked==true){

    }
    else if(document.getElementsByName("type")[1].checked==true){
      fetch("http://3.137.209.222:8000/Particulartrainer/",{
        method: "POST",
        headers: {
          "Content-type": "application/json" 
        },
        body : JSON.stringify({
          "userid" : sessionStorage.getItem("email"),
        })
      }).then((res)=>res.json()).then((data)=>getStatus(data,"trainer"));    
    }
    else{
      document.getElementById("select_type_label").style.display="block";
    }
    console.log(sessionStorage.getItem("email"));
    //Call to login for checking if trainer exist
  };
  const onMenuClick = (event) => {
    setdrpdown(event.target.innerText);
    setrendermenu(!rendermenu);
  };
  const typeChangeHandler = (event) => {
    console.log(event.target.value);
    event.target.value == "trainer" ? settrainer(true) : settrainer(false);
    document.getElementById("select_type_label").style.display="none";
  };
  /*          {istrainer && (
            <div
              className="dropdown"
              onClick={() => setrendermenu(!rendermenu)}
            >
              <p style={{ color: "#767676" }}>{drpdown}</p>
              <AiOutlineDown className="dropdown_ico" />
              {rendermenu && (
                <div className="dropdown_menu">
                  <div className="options">
                    <p onClick={(event) => onMenuClick(event)}>
                      indivisual or company
                    </p>
                    <p onClick={(event) => onMenuClick(event)}>second option</p>
                    <p onClick={(event) => onMenuClick(event)}>third option</p>
                    <p onClick={(event) => onMenuClick(event)}>fourth option</p>
                  </div>
                </div>
              )}
            </div>
          )}
*/
const CheckLogin = () => {
  if(document.getElementsByName("type")[0].checked==true){
    fetch('http://3.137.209.222:8000/UserLogin/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'  
  },
  body: JSON.stringify({  
    "action":"dashboard_data",
    "userid":document.getElementById("email").value,
    'password':document.getElementById("password").value
  })
  }).then((response) => response.json())
      .then((responseJson) => {
        sessionStorage.setItem("email",document.getElementById("email").value);
        sessionStorage.setItem("password",document.getElementById("password").value);
        console.log(responseJson);
          if(responseJson.Message=="Login Successfully")
          {
          history.push("/user/profile");
          }
          else if(responseJson.status="404"){
            history.push("/signup/user");
          }
      }).catch((error) => {
        console.error(error);
      });
  
  }
  else if(document.getElementsByName("type")[1].checked==true){

    fetch('http://3.137.209.222:8000/TrainerLogin/', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'  
  },
  body: JSON.stringify({  
    "action":"dashboard_data",
    "userid":document.getElementById("email").value,
    'password':document.getElementById("password").value
  })
  }).then((response) => response.json())
      .then((responseJson) => {
          // If server response message same as Data Matched
        //setTobecollected(responseJson.Message);
        sessionStorage.setItem("email",document.getElementById("email").value);
        sessionStorage.setItem("password",document.getElementById("password").value);
        console.log(responseJson);
          if(responseJson.Message=="Login Successfully")
          {
          history.push("/trainer/profile");
          }
          else if(responseJson.status="404"){
            history.push("/signup/trainer");
          }
      }).catch((error) => {
        // alert(error);
        console.error(error);
      });
  
  }else {
  document.getElementById("select_type_label").style.display="block";
}
}
const togglePop = () => {
setSeen(!seen);
}
const toggle=()=>{
  setSeen(!seen);
}
const togglePop2 = () => {
  setSeen2(!seen2);
  }
  const toggle2=()=>{
    setSeen2(!seen2);
  }
  return (
    <Container>
      <p className="decor_txt">
        Let's Begin Your
        <div style={{ display: "flex" }}>
          <p style={{ textShadow: "4px 4px 4px #0000004A" }}>FITBUDDY&nbsp;</p>
          Journey
        </div>
      </p>
      <img className="img_dec" src="/assets/login_img.png" alt="" />
      <div className="form_sec">
        <form className="form_ctr" onSubmit={(event) => nextStep(event)}>
          <img className="logo" src="/assets/logo.png" />
          <div className="input_ctr">
            <BsChatSquareDots color="#4a4a4a" />
            <input
              id="email"
              onChange={(event)=> {sessionStorage.setItem("email",event.target.value);}}
              type="text" //previously type="email"
              placeholder="Email or mobile number"
              required
            ></input>
          </div>
          <div className="input_ctr">
            <RiLockPasswordLine color="#4a4a4a" />
            <input id="password" onChange={(event)=> {sessionStorage.setItem("password",event.target.value);}} type="password" placeholder="password" required></input>
          </div>
          <form onChange={(event) => typeChangeHandler(event)} >
            <p>Register yourself as:</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>
                <input type="radio" name="type" value="customer" />&nbsp;
                Customer
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input type="radio" name="type" value="trainer" />&nbsp;
                Trainer
              </label>
            </div>
            <p id="select_type_label" style={{color:"red",display:"none"}}>Please Select Trainer or User</p>
          </form>
          <button className="continue" onClick={CheckLogin} type="button">
            CONTINUE
          </button>
          <p className="tc">
            By Continuing you agree to the <a id="terms_and_services" onClick={()=>{togglePop()}}>Terms of Services </a>
            &nbsp;and&nbsp;
            <a onClick={()=>{togglePop2()}}>Privacy policy.</a>
          </p>
          <p className="continueWith">or continue with</p>
          <div className="media_ctr">
            <AiFillGoogleCircle />
            <AiFillTwitterCircle />
            <FaFacebook />
          </div>
        </form>
      </div>
        {seen &&  <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={()=>toggle()}>
            &times;
          </span>
          <div>
         <p className="center_bold_center">PRIVACY POLICY</p><br></br><br></br>
         <p className="center_bold_center">WE ARE COMMITTED TO PROTECTING THE PRIVACY AND SECURITY OF THE USERS OF OUR WEBSITE, MOBILE APP, AND ONLINE SERVICE.</p>
         <br></br><p className="simple">This privacy policy outlines what information we collect, how we use it and your choices concerning our possession and use of this information. We may change this policy from time to time in order to address new issues, adhere to new regulations and reflect changes on our
website. We will post those changes here so that you will always know our policies regarding
what information we gather, how we might use that information
If you have any questions or concerns about our privacy policy, please send an e-mail
to admin@fitbuddy.co.in</p><br></br><br></br>
<p className="center_bold">SCOPE OF PRIVACY POLICY</p><br></br>
<p className="simple">This policy applies to your use of fitbuddy.co.in website, FitBuddy m-web and FitBuddy
mobile application (collectively referred to as the “Platform”), owned and operated by ETrainers Analytics Wizard Pvt Ltd.
Any reliance you place on any such information is therefore strictly at your own risk.</p><br></br><br></br>
<p className="center_bold">PERSONAL IDENTIFICATION INFORMATION</p><br></br>
<p className="simple">We may request personal identification information from you (such as your name, gender, street
address, telephone number, e-mail address and/or any other identifier that permits the physical
or online contacting of you) in connection with your use of, or participation in anything at
FitBuddy including our contests, sweepstakes, promotions, challenges, games, surveys, forums,
subscription registrations, content submissions, chats, discussion groups, requests for
suggestions, visitors’ requests for free products or services or additional information (including
via e-mail to us) and in connection with other activities, services or resources we make available
on any of our Website. In all these cases, we will collect personal identification information
from you only if you voluntarily submit such information to us. Except as otherwise provided in
this policy, we use current best practices to ensure that we never intentionally disclose any
personal identification information about you as an individual user to any third party without
having received your permission (through opting in or similar procedures), except as provided
for herein or otherwise as permitted or required under law.
If you do provide us with personal information for any of these activities, we may use it to
conduct the activity. We may also use cookie technology to improve your experience of these
activities, including remembering your preferences, customizing the content and advertisements
that you see or authenticate your access to your personal information. In addition, in the event
that your personally identifiable information is requested as part of our surveys, polls or
promotions, such personally identifiable information may be added to your registration
information. We may also contact you about your account status (for example, when a child 
enters a new age group to which different policies apply), to confirm your registration and
regarding changes to this Privacy Policy.
If you give us your permission, we may also use personal identification information for internal
or external marketing and promotional purposes. On occasion, for example, we may send you emails to introduce a product or a service that we think might be of interest to the users of our
Website. For us to obtain your permission to send you this information, we will give you an
opportunity to “opt in” at the time our request for your personal information is made. If you do
“opt in,” you may choose to “opt out” at any time, even after you have provided personal
information, by following the procedures set forth below at the end of this Privacy Policy.
Please note, however, that under certain circumstances, if you initially do not choose to “opt in”
or if you later “opt out,” you may not be eligible for certain benefits for which a name, e-mail
address, telephone number or other personal identification information is needed.
We have the following exceptions to these policies: We will release specific information about
you or your account to comply with any valid legal inquiry or process such as a search warrant,
subpoena, statute or court order. We will also release specific information in special cases, such
as if there is an attempted breach of the security of the Website or a physical or property threat
to you or others. We may also transfer user information, including personally identifiable
information, in connection with a corporate merger, consolidation, the sale of related assets or
corporate division or other fundamental corporate change. We may provide access to your
personally identifiable information to our contractors who are performing services for us in
connection with our Website or the services that you have requested.
In addition, on occasion, we may collect personal identification information from you in
connection with optional contests, special offers or promotions. We will share such information
with necessary third parties for the purpose of carrying out the contest, special offer or
promotion. Your participation in the contest, special offer or promotion constitutes your consent
to such disclosure and use of such information. Further, the information you enter when making
a purchase or online donation will be shared with payment processors, financial gateways and
your credit card company to authorize credit card payments. Such information may also be
shared with necessary third parties solely for the purpose of carrying out the transactions.
Please note that if you give out personal information online—for example, on one of our public
forums such as a message board, chat room, folder or chat feature—that information can be
collected and used by third parties. Although we strive to protect our users’ privacy, we cannot
guarantee the security of information you post in these forums and have no control over how
such third parties may use your information. You disclose such information at your own risk.
You are responsible for maintaining the confidentiality of your information and password. You
shall be responsible for all uses of your registration, whether or not authorized by you. You
agree to immediately notify us of any unauthorized use of your registration or password.</p><br></br><br></br>
<p className="center_bold">THIRD PARTIES AND POLICES
</p><br></br>
<p className="simple">Please be aware that when you access and/or use certain features of the Site, your access to or
use of such features will also be subject to all guidelines, terms, agreements, and conditions
applicable to such features, including third party policies (the “Policies”). All such Policies are 
incorporated into these Terms by reference, and if the applicability of these Terms is
incompatible with your access to or use of the Services, the relevant terms of such third party
Policies will control.
</p><br></br><br></br>
<p className="center_bold">NON-PERSONAL IDENTIFICATION INFORMATION
</p><br></br>
<p className="simple">We collect non-personal identification information through the use of, without limitation, the
following types of methodology:-
Cookie technology: A “cookie” is an element of data that a website can send to your browser,
which may then store it on your system.
IP address tracking: An IP address is a number that is assigned to your computer when you are
on the Internet. When you request pages from our Website, our servers log your IP address. Web
beacons: A Web beacon, or “clear gif,” is a small graphic image on a webpage or Web-based
document that a website can use to determine information about a user.
Non-personal identification information might include the browser you use, the type of
computer you use and technical information about your means of connection to our Website—
such as the operating systems and the Internet service providers utilized and other similar
information. Our systems may also automatically gather information about the areas you visit
and search terms you use on our Website and about the links you may select from within our
Website to other areas of the Web or elsewhere online.
We use such information for our business purposes and, in particular, primarily to administer the
Website, better manage advertising on the Website and, in the aggregate, to understand how our
users as a group use the services and resources provided on our Website. This way, we know
which areas of our Website are the favorites of our users, which areas need improvement and
what technologies are being used so that we may continually improve our Website.
We may share this aggregate statistical information with our partners, suppliers and other third
parties, but we will not share any individual names, personal navigational or other personal
information. For example, we may use a third-party advertising company to serve ads when you
visit our Website. We may share demographic and preference information with this company to
allow them to display appropriate advertisements for you.
We use a proprietary advertising server to display ads on our Website. In addition, advertisers
may elect to use third-party advertising companies to serve ads onto our Website. Some of our
advertisers may display ads on our Website that may use cookie technology or Web beacons to
(i) identify non-personal information about our users (such as connection speed, browser and
country of origin) and (ii) track user behavior within our Website. Advertisers generally use
such information to customize the display of ads within our Website. We will not permit such
advertisers to collect any personal information from our users within our Website, however, you
may choose to voluntarily provide the advertisers with your personal information. We do not
have access to these cookies or any information that they may contain. The type of information
we collect includes the number of hits a webpage receives, the type of browser used and the
number of times a visitor makes a purchase from a particular promotion. By supplementing our
records, this information helps us learn things like what pages are most attractive to our visitors, 
which of our products and services most interest our users, and what kinds of offers our users
like to see. Although this third-party provider logs the information coming from our Website on
our behalf, we control how that data may and may not be used.</p><br></br><br></br>
<p className="center_bold">SENSITIVE DATA
</p><br></br>
<p className="simple">Sensitive Data includes information, comments or content (e.g. photographs, video, profile, and
lifestyle) that you optionally provide that may reveal your ethnic origin, nationality, religion
and/or sexual orientation. By providing Sensitive Data to us, you consent to the collection, use
and disclosure of Sensitive Data as permitted by applicable privacy laws. We may also collect
your geo location information with your consent. We may collect this information through a
website, mobile application, or other online services. By using the Service, you are authorizing
us to gather, parse and retain data related to the provision of the Service. When you provide
personal information through our Service, the information may be sent to servers located in the
India and countries around the world.</p><br></br><br></br>
<p className="center_bold">LINKS TO OTHER WEBSITES
</p><br></br>
<p className="simple">Users will find advertising or other content on our Website that link to the website and services
of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not
control the content or links that appear on this website. In addition, these website or services,
including their content and links, may be constantly changing. These website and services may
have their own privacy policies and customer service policies or no policy (policies) at all. We
encourage you to review the privacy policies of any third-party website or services before
providing any of them with your personal information.</p><br></br><br></br>
<p className="center_bold">SECURITY POLICY
</p><br></br>
<p className="simple">Protecting your privacy and your information is a top priority. We have taken reasonable
measures to secure both your information and our physical premises. We exercise reasonable
care in providing safe transmission of your information from your PC to our servers (unless sent
by a means outside of our control, such as e-mail). However, we cannot guarantee that our
measures will completely bar unauthorized access to your information, and by using the Website
you assume this risk.
</p><br></br><br></br>
<p className="center_bold">ACCESS TO / CORRECTION OF INFORMATION
</p><br></br>
<p className="simple">If you would like to review any personal information we have retained about you in our
database, please send us an e-mail request for this information at admin@fitbuddy.co.in to help
us address your request, please specify which information you wish to review. Once you have
reviewed this information, at your request, we will correct personal information about you that
you state is erroneous. To request such a correction, please send an e-mail to info
admin@fitbuddy.co.in. You should be aware, however, that it is not always possible to 
completely remove or modify information in our databases and servers, although we will always
make reasonable efforts to do so upon your request. Please also understand that due to the
volume of traffic on the Website and correspondence received, we cannot make any
representations about the timeliness of the making of such modifications. We are unable to
modify your information in the records of any third party who has been provided with your
information in accordance with this policy.
</p><br></br><br></br>
<p className="center_bold">CHOICE / OPT-OUT
</p><br></br>
<p className="simple">If you “opt in” to receive information from us or others, you can change your mind later. If, at
any time, you would like to stop receiving such information or opt out of a feature, you can send
us an email to notify us of your intention. You should be aware, however, that it is not always
possible to completely remove or modify information in our databases and servers, although we
will always make reasonable efforts to do so upon your request, and we are unable to have your
information removed from the records of any third party who has been provided with your
information in accordance with this policy. We make every effort to remove information within
60 days of opt out.</p><br></br><br></br>
<p className="center_bold">YOUR ACCEPTANCE OF THESE TERMS
</p><br></br>
<p className="simple">By using our Site you signify your acceptance of the terms of this Privacy Policy and promise to
comply with the representations you make and contained in the Privacy Policy and your
understanding of the scope and limitations of the protections provided under the Privacy Policy
and Terms and Conditions. If you do not agree to the terms of this Privacy Policy, please do not
use the Site and exit immediately. Consent may be withdrawn at any time by emailing us
at: admin@fitbuddy.co.in. Your continued use of the Website following the posting of changes
to these terms will mean that you accept those changes.
</p><br></br><br></br>
<p className="center_bold">CHANGES TO PRIVACY POLICY
</p><br></br>
<p className="simple">We may amend this policy from time to time. If we make any material changes we will notify
you by email (sent to the e-mail address specified in your account) or by means of a notice on
this website prior to the change becoming effective. We encourage you to periodically review
this page for the latest information on our privacy practices. If we make any substantial changes
in the way we use your personal information, we will notify you by posting a prominent notice
in our privacy policy or in other locations on our Web site or by sending you an email to inform
you of our updated privacy policy.
</p><br></br><br></br>
<p className="center_bold">SPAM</p><br></br>
<p className="simple">We do not like it, we do not support it, and we do not engage in it. If you do not want to receive
e-mail from us in the future, please let us know by contacting us at: admin@fitbuddy.co.in. Be 
sure to specify whether you want to be removed from a certain e-mail list or all of our product email lists.</p><br></br><br></br>
<p className="center_bold">CUSTOMER SERVICE / CONTACT
</p><br></br>
<p className="simple">If you have any questions on our Privacy Policy, or complaints about our handling of your
Personal Data, you can contact us at: admin@fitbuddy.co.in
</p><br></br><br></br>
<p className="bold_italiac">Copyright © All rights reserved.<br></br>
Last updated June 2021.</p>          
</div>
        </div>
      </div>  }


      {seen2 &&  <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={()=>toggle2()}>
            &times;
          </span>
          <div>
         <p className="center_bold_center">TERMS AND CONDITIONS</p><br></br><br></br>
         <p className="center_bold_center">TERMS OF USE AGREEMENT</p>
<p className="simple">These terms of use (“Terms of Use”) mandate the terms on which the users access and register on
the ‘FitBuddy 24x7’ website, m-web and mobile application (collectively referred to as
the “Platform”), operated by E-Trainers Analytics Wizard Pvt Ltd (hereinafter referred to as “We”
or “Our” or “Us” or “Company”), and the Platform Services (as defined below), provided through
the Platform.
Please read the Terms of Use and Privacy Policy (together hereinafter referred to as
“Agreement”) carefully before using or registering on the Platform or accessing any material,
information or Platform Services through the Platform. Your access to or use of the Platform (even
when You do not avail any services on the Platform) or booking, purchase or availment of the
Platform Services shall signify your acceptance of the Terms of Use and Privacy Policy and Your
agreement to be legally bound by the same. These Terms of Use do not alter in any way the terms
or conditions of any other written agreement you may have with the Platform for other services.</p><br></br><br></br>
<p className="center_bold">1. READ CAREFULLY!</p><br></br>
<p className="simple">PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SITE. BY ACCESSING
THE SITE AND/OR CREATING A USER ACCOUNT, YOU AGREE TO BE BOUND BY
ALL OF THESE TERMS. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, THEN
YOU MAY NOT ACCESS OR USE THE SITE. COMPANY’S ACCEPTANCE OF YOUR
ACCESS TO OR USE OF THE SITE IS EXPRESSLY CONDITIONED UPON YOUR ASSENT
TO ALL OF THESE TERMS.
These Terms govern your access to and use of the Site provided by Company.
The information available on this website is for general information purposes only. The
information is provided by https://fitbuddy.co.in a property of E-Trainers Analytics Wizard Pvt
Ltd. Any reliance you place on such information is therefore strictly at your own risk.</p><br></br><br></br>
<p className="center_bold">2. RIGHTS AND OBLIGATIONS OF USER</p><br></br>
<p className="simple">Any use of the Website is entirely at your own risk. We are not liable for damages resulting
from interruptions, defects, harmful elements or other problems on or within our Website
either to you or to your legal representative who shall be making use of our platform.
We apply great care in this respect and make every effort to provide high quality information.
We therefore take all necessary steps to keep our Website as complete, accurate and current
as possible, even when the information is provided by third parties but we cannot guarantee.
The User bears a responsibility for the way we offer our Website. This means that you should
refrain from acts that have a destructive impact on the proper operation and security of the
site or on its use.
The User must also refrain from any behaviour which is offensive or objectionable or opposed to
public policies or indecent or inappropriate in such a way that may amount to misbehaviour or
misconduct.
The User is solely responsible for all actions or its behaviour on the Website in case where it
causes damages to the website due to any means or ways because of the usage at its end. The
User has a complete obligation to keep the owner harmless and indemnified from all claims
that may arise in connection with the usage of our website in any form directly or indirectly.</p><br></br><br></br>
<p className="center_bold">3. LIMITATION OF LIABILITY</p><br></br>
<p className="simple">In no event will we be liable for any loss or damage including without limitation, indirect or
consequential loss or damage, or any loss or damage whatsoever arising from loss of data or
profits arise out of, or in connection with, the use of this website. Through this website, you
can link to third party websites which are not under the control of E-Trainers Analytics Wizard
Pvt. Ltd. We have no control over the nature, content, and availability of those sites. The inclusion
of any links does not necessarily imply a recommendation or endorse the views expressed within
them even though every possible effort is made to keep the website running smoothly. However,
E-Trainers Analytics Wizard Pvt. Ltd. takes no responsibility for, and will not be liable for the
website being temporarily unavailable due to technical issues beyond our control. If for any
reason, law does not permit exclusions of liability then, the liability of the FitBuddy shall be
limited to such amount paid by the user and retained by the FitBuddy for the transaction in
question.
</p><br></br><br></br>
<p className="center_bold">4. CHANGEABILITY</p><br></br>
<p className="simple">We reserve the right to change or modify these Terms or any Policy and the Site we offer at any
time without notice to you to reflect changes in our practices or keep current with relevant laws
or industry standards. We also retain the right to create limits on your use and storage of User
Content at our sole discretion at any time without prior notice to you. In addition, Company may
stop (permanently or temporarily) providing the Site (or any features within the Site) to you or to
users generally and may not be able to provide you with prior notice. We may attempt to notify
any registered users of material changes by sending an email to the email address you most
recently provided us in your User Account, profile, or registration (unless we do not have such an
email address), and/or by posting notice of the changes on the Site. Your access to and/or use of
the Site will be subject to the most current version of these Terms posted on the Site at the time
of your access or use. We recommend that you check the Site from time to time to inform yourself
of any changes in these Terms, and stay apprised of any other Policies that may be applicable; you
are solely responsible for reviewing and becoming familiar with any modifications to these Terms.
Should Company permanently stop the Site, you may terminate your use, User Account, and/or
Subscription Agreement pursuant to the termination process set forth in these Terms, and upon
Company’s verification of your fulfillment of all termination requirements and in Company’s sole
discretion, Company may refund a pro-rata portion of any remaining subscription fees paid.</p><br></br><br></br>
<p className="center_bold">5. WARRANTY AND REPRESENTATION</p><br></br>
<p className="simple">We make no representations or warranties of any kind, express or implied, about the
completeness, accuracy, reliability, suitability or availability concerning the website or the
information, products, services, or related graphics contained on the website or any other
such thing which is directly or indirectly have a link with the website for any purpose.
You agree that your access to or use of the site, the site materials, and all user content shall be at
your sole risk.
You understand and agree that you download or otherwise obtain material or data through the
access to or use of the site, including but not limited to any user content, at your own discretion
and risk. company does not warrant that the site, the site materials, or any user content will be
error-free, that access thereto will be uninterrupted, that defects will be corrected, that data will
not be lost or that the site or the server that makes such content available is free of viruses or other
harmful components. in such event, you assume the entire cost of all necessary servicing, repair
or correction. Company does not warrant or make any representation regarding the access to or
use or the results of the access to or use of the site, the site materials, or any user content. you 
hereby irrevocably waive any claim against company, its affiliates, shareholders, directors,
officers, employees and agents with respect to the site, goods or services provded by us, the site
materials, and the user content and any content you provide to third parties (including credit card
and other personal information).</p><br></br><br></br>
<p className="center_bold">6. CONSENT</p><br></br>
<p className="simple">By using the website, you hereby give consent to our disclaimer and agree to its terms and
conditions as mentioned above in this document. The consent given shall be free consent of
the parties and assumed to be not caused by coercion, undue influence, fraud,
misrepresentation or mistake.
Each user by using this website, shall be deemed to have consented to be bound by all of the
terms and conditions of this Website. And, they agree that you have understand our
company’s terms and expressly consents to website monitoring of system whenever use at
all times.</p><br></br><br></br>
<p className="center_bold">7. INTELLECTUAL PROPERTY RIGHTS</p><br></br>
<p className="simple">E-Trainers Analytics Wizard Pvt. Ltd. retains all rights relating to patent, trademark, copyright
and all other Intellectual Property Rights in respect to the information provided on this website.
We ask our users not to create, or to bring changes to the intellectual property rights as described
in this Website without the consent of the owner. It is of great importance and will take all possible
measures to guarantee this protection.
Company’s proprietary content, including videos, designs, text, graphics, pictures, information,
Services, data, software (and the selection and arrangement thereof) logos, and code (collectively,
the “Site Materials”) are all property of Company and are protected by intellectual property laws,
and except as permitted under these Terms, Company expressly reserves all right, title, and interest
in and to the content and services of the Site and Site Materials, aggregate data, and reports, and
all processing, analytics, and other software and technology used by Company in the analysis of
User Content (as defined below) and/or the provision of the Site, including, without limitation,
any derivatives, improvements, enhancements, or extensions thereof conceived, reduced to
practice, or otherwise developed on or on behalf of Company, all of which are valuable assets of
Company, and any copyright, patent, trademark, or any other intellectual property right, or federal
or state right, pertaining thereto.
UNAUTHORIZED USE, MODIFICATION, REPUBLISHING, TRANSMITTING,
DISTRIBUTING, OR DUPLICATING OR ANY OTHER MISUSE OF THE SITE OR SITE
MATERIALS BY YOU IS PROHIBITED.</p><br></br><br></br>
<p className="center_bold">8. EXTERNAL LINKS & THIRD PARTY SERVICES</p><br></br>
<p className="simple">This website may contain links to other websites, which are controlled and owned by third
parties so the Company is not responsible for the operators of such external websites and the
products/services provided or content of external websites.
The Site allows (or may in the future allow) you to select, input, upload, and share information
and data in connection with and through designated user accounts maintained by you on certain
third-party social media platforms or via third parties for services (together, “Third Party
Services”). The Site allows (or may in the future allow) you to access Third Party Services using
the Site to post, link, message users of Third Party Services, or otherwise act on a wide variety of
information accessed by the Site and originating from user accounts on Third Party Services, and
to collect data and generate reports based on these activities (collectively, “User Materials”). You 
are solely responsible for User Materials. By accessing Third Party Services through the Site, you
represent and warrant that you have the lawful right to access such Third Party Services, and that
the creation, distribution, and reproduction of the User Materials complies with the terms
applicable to the Third Party Services. You shall ensure that your use of the Site, including access
to or use of User Materials with the Site and Third Party Services, does not contain code, files,
content, or programs that may interrupt, destroy, or limit the functionality of any computer
software or hardware or telecommunications equipment, including, without limitation, by
introducing viruses or similar code into the Site, hosted systems or servers, or systems or servers
maintained by providers of Third Party Services accessed through the Site. Company is not
responsible for any loss or damage to User Materials. You assume all risks for the User Materials
and are solely responsible for protecting and backing up the same.
The Site may also contain links to sites, third parties, or content not under the control of Company.
Company does not assume, and expressly disclaims any and all, responsibility for the sites and/or
content of any page or material not of the Site. Links to third-party web sites on the Site are
provided solely as a convenience to you. Company has not reviewed these third-party web sites,
and does not control and is not responsible for any such sites or content displayed thereon. If you
decide to access any of the third-party sites linked to the Site, you do so entirely at your own risk,
and the inclusion of any third-party link on the Site does not imply any endorsement or guarantee
whatsoever by Company of such third-party site. If you have questions or concerns about any
Third Party Services or material available through such, you may contact us
at admin@fitbuddy.co.in.</p><br></br><br></br>
<p className="center_bold">9. GOVERNING LAWS</p><br></br>
<p className="simple">This website and disclaimer shall be governed by and construed by following all applicable
laws of India.
Recognizing the global nature of the internet and the rapid changes around online privacy, you
agree to comply with all local rules regarding online conduct and acceptable content. Without
limiting the foregoing, you agree to comply with all applicable laws regarding the transmission of
technical data exported to or from the India or in the country in which you operate or reside and
to comply with any other local laws affecting the Site.
</p><br></br><br></br>
<p className="center_bold">10. DISPUTE RESOLUTION</p><br></br>
<p className="simple">This website and disclaimer shall be governed by and construed by following all applicable
laws of India. All disputes arising out of or in connection with this disclaimer or use of this
website shall be resolved through arbitration under the supervision of the Honourable Court,
who has the jurisdiction of the registered office of E-Trainers Analytics Wizard Pvt. Ltd. The
sole arbitrator will be appointed by the consent of both the parties at the time of dispute and the
expenses of the dispute shall be collected from the party who arises the dispute and after the
decision of the arbitrator it shall be collected from the Judgment debtor.
Disputes arising in relation hereto shall be subject to the exclusive jurisdiction of courts, tribunals,
fora, applicable authorities at Delhi.
</p><br></br><br></br>
<p className="center_bold">11. AMENDMENTS</p><br></br>
<p className="simple">E-Trainers Analytics Wizard Pvt. Ltd reserves the right to amend or change the information
provided on this website, including the terms of this disclaimer, at any time and without giving 
prior notice. It shall be your responsibility to check this Terms of Use periodically for changes.
Your continued use of the Platform following the posting of changes to this Terms of Use on the
Platform, will constitute Your consent and acceptance of those changes.
</p><br></br><br></br>
<p className="center_bold">12. VIOLATION OF THE TERMS OF USE</p><br></br>
<p className="simple">You agree that any violation by You of these Terms of Use will constitute an unlawful and unfair
business practice, and will cause irreparable harm to the Company and/or Vendors, as the case may
be, for which monetary damages would be inadequate, and You consent to the Company and/or
Vendors obtaining any injunctive or equitable relief that they deem necessary or appropriate in
such circumstances. These remedies are in addition to any other remedies that the Company and/or
Vendors obtaining may have at law or in equity. If the Company and/or Vendors takes any legal
action against You as a result of Your violation of these Terms of Use, they will be entitled to
recover from You, and You agree to pay, all reasonable lawyers/advocates’ fees and costs of such
action, in addition to any other relief that may be granted.
</p><br></br><br></br>
<p className="center_bold">13. CONTACT INFORMATION</p><br></br>
<p className="simple">In case of any queries regarding the disclaimer.
Email id: admin@fitbuddy.co.in
</p><br></br><br></br>
<p className="center_bold">14. GRIEVANCE REDRESSAL</p><br></br>
<p className="simple">Any complaints, concerns, issue, doubts and claims with regards to the content shall be
taken up with the designated Grievance Officer as details mentioned under previous Clause 13
and the grievance officer shall reach out to you and will ensure to take preventive steps against
the query which has been raised by you.</p><br></br><br></br>
<p className="bold_italiac">Copyright © All rights reserved.<br></br>
Last updated June 2021.</p>          
</div>
        </div>
      </div>  }
    </Container>
  );
}
