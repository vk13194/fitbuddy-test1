import React from "react";
import home from "./styles/home.module.css";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Policiesfooter from "./Policiesfooter";
export default function Privacy_policy(){
  const history=useHistory();
    return (
      <>
      <Navbar/>
        <div className={home.modal}>
          <div style={{"display":"flex","padding":"20px","cursor":"pointer"}}>
              <img
                onClick={()=>history.push("/")}
                className={home.nav_logo}
                src="/assets/logo.png"
                alt="Fitbuddy"
              />
            </div>
            
        <div className={home.modal_content}>
          <div>
         <p className={home.center_bold_center}>PRIVACY POLICY</p><br></br><br></br>
         <p className={home.center_bold_center}>WE ARE COMMITTED TO PROTECTING THE PRIVACY AND SECURITY OF THE USERS OF OUR WEBSITE, MOBILE APP, AND ONLINE SERVICE.</p>
         <br></br><p className={home.simple}>This privacy policy outlines what information we collect, how we use it and your choices concerning our possession and use of this information. We may change this policy from time to time in order to address new issues, adhere to new regulations and reflect changes on our
  website. We will post those changes here so that you will always know our policies regarding
  what information we gather, how we might use that information
  If you have any questions or concerns about our privacy policy, please send an e-mail
  to   </p> <a href="mailto:admin@fitbuddy.co.in">admin@fitbuddy.co.in</a> <br></br><br></br> 
  <p className={home.center_bold}>SCOPE OF PRIVACY POLICY</p><br></br>
  <p className={home.simple}>This policy applies to your use of fitbuddy.co.in website, FitBuddy m-web and FitBuddy
  mobile application (collectively referred to as the “Platform”), owned and operated by ETrainers Analytics Wizard Pvt Ltd.
  Any reliance you place on any such information is therefore strictly at your own risk.</p><br></br><br></br>
  <p className={home.center_bold}>PERSONAL IDENTIFICATION INFORMATION</p><br></br>
  <p className={home.simple}>We may request personal identification information from you (such as your name, gender, street
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
  <p className={home.center_bold}>THIRD PARTIES AND POLICES
  </p><br></br>
  <p className={home.simple}>Please be aware that when you access and/or use certain features of the Site, your access to or
  use of such features will also be subject to all guidelines, terms, agreements, and conditions
  applicable to such features, including third party policies (the “Policies”). All such Policies are 
  incorporated into these Terms by reference, and if the applicability of these Terms is
  incompatible with your access to or use of the Services, the relevant terms of such third party
  Policies will control.
  </p><br></br><br></br>
  <p className={home.center_bold}>NON-PERSONAL IDENTIFICATION INFORMATION
  </p><br></br>
  <p className={home.simple}>We collect non-personal identification information through the use of, without limitation, the
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
  <p className={home.center_bold}>SENSITIVE DATA
  </p><br></br>
  <p className={home.simple}>Sensitive Data includes information, comments or content (e.g. photographs, video, profile, and
  lifestyle) that you optionally provide that may reveal your ethnic origin, nationality, religion
  and/or sexual orientation. By providing Sensitive Data to us, you consent to the collection, use
  and disclosure of Sensitive Data as permitted by applicable privacy laws. We may also collect
  your geo location information with your consent. We may collect this information through a
  website, mobile application, or other online services. By using the Service, you are authorizing
  us to gather, parse and retain data related to the provision of the Service. When you provide
  personal information through our Service, the information may be sent to servers located in the
  India and countries around the world.</p><br></br><br></br>
  <p className={home.center_bold}>LINKS TO OTHER WEBSITES
  </p><br></br>
  <p className={home.simple}>Users will find advertising or other content on our Website that link to the website and services
  of our partners, suppliers, advertisers, sponsors, licensors and other third parties. We do not
  control the content or links that appear on this website. In addition, these website or services,
  including their content and links, may be constantly changing. These website and services may
  have their own privacy policies and customer service policies or no policy (policies) at all. We
  encourage you to review the privacy policies of any third-party website or services before
  providing any of them with your personal information.</p><br></br><br></br>
  <p className={home.center_bold}>SECURITY POLICY
  </p><br></br>
  <p className={home.simple}>Protecting your privacy and your information is a top priority. We have taken reasonable
  measures to secure both your information and our physical premises. We exercise reasonable
  care in providing safe transmission of your information from your PC to our servers (unless sent
  by a means outside of our control, such as e-mail). However, we cannot guarantee that our
  measures will completely bar unauthorized access to your information, and by using the Website
  you assume this risk.
  </p><br></br><br></br>
  <p className={home.center_bold}>ACCESS TO / CORRECTION OF INFORMATION
  </p><br></br>
  <p className={home.simple}>If you would like to review any personal information we have retained about you in our
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
  <p className={home.center_bold}>CHOICE / OPT-OUT
  </p><br></br>
  <p className={home.simple}>If you “opt in” to receive information from us or others, you can change your mind later. If, at
  any time, you would like to stop receiving such information or opt out of a feature, you can send
  us an email to notify us of your intention. You should be aware, however, that it is not always
  possible to completely remove or modify information in our databases and servers, although we
  will always make reasonable efforts to do so upon your request, and we are unable to have your
  information removed from the records of any third party who has been provided with your
  information in accordance with this policy. We make every effort to remove information within
  60 days of opt out.</p><br></br><br></br>
  <p className={home.center_bold}>YOUR ACCEPTANCE OF THESE TERMS
  </p><br></br>
  <p className={home.simple}>By using our Site you signify your acceptance of the terms of this Privacy Policy and promise to
  comply with the representations you make and contained in the Privacy Policy and your
  understanding of the scope and limitations of the protections provided under the Privacy Policy
  and Terms and Conditions. If you do not agree to the terms of this Privacy Policy, please do not
  use the Site and exit immediately. Consent may be withdrawn at any time by emailing us
  at: admin@fitbuddy.co.in. Your continued use of the Website following the posting of changes
  to these terms will mean that you accept those changes.
  </p><br></br><br></br>
  <p className={home.center_bold}>CHANGES TO PRIVACY POLICY
  </p><br></br>
  <p className={home.simple}>We may amend this policy from time to time. If we make any material changes we will notify
  you by email (sent to the e-mail address specified in your account) or by means of a notice on
  this website prior to the change becoming effective. We encourage you to periodically review
  this page for the latest information on our privacy practices. If we make any substantial changes
  in the way we use your personal information, we will notify you by posting a prominent notice
  in our privacy policy or in other locations on our Web site or by sending you an email to inform
  you of our updated privacy policy.
  </p><br></br><br></br>
  <p className={home.center_bold}>SPAM</p><br></br>
  <p className={home.simple}>We do not like it, we do not support it, and we do not engage in it. If you do not want to receive
  e-mail from us in the future, please let us know by contacting us at: admin@fitbuddy.co.in. Be 
  sure to specify whether you want to be removed from a certain e-mail list or all of our product email lists.</p><br></br><br></br>
  <p className={home.center_bold}>CUSTOMER SERVICE / CONTACT
  </p><br></br>
  <p className={home.simple}>If you have any questions on our Privacy Policy, or complaints about our handling of your
  Personal Data, you can contact us at: admin@fitbuddy.co.in
  </p><br></br><br></br>
  <p className={home.bold_italiac}>Copyright © All rights reserved.<br></br>
  Last updated June 2021.</p>          
  </div>
        </div>
      </div>    
     
      </>
    )
}