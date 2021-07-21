import React, { useState } from "react";
import home from "./styles/home.module.css";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Policiesfooter from "./Policiesfooter";
export default function Terms_and_conditions() {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className={home.modal}>
        <div style={{ "display": "flex", "padding": "20px", "cursor": "pointer" }}>
          <img
            onClick={() => history.push("/")}
            className={home.nav_logo}
            src="/assets/logo.png"
            alt="Fitbuddy"
          />
        </div>

        <div className={home.modal_content}>
          <div>
            <p className={home.center_bold_center}>TERMS AND CONDITIONS</p><br></br><br></br>
            <p className={home.center_bold_center}>TERMS OF USE AGREEMENT</p>
            <p className={home.simple}>These terms of use (“Terms of Use”) mandate the terms on which the users access and register on
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
            <p className={home.center_bold}>1. READ CAREFULLY!</p><br></br>
            <p className={home.simple}>PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SITE. BY ACCESSING
              THE SITE AND/OR CREATING A USER ACCOUNT, YOU AGREE TO BE BOUND BY
              ALL OF THESE TERMS. IF YOU DO NOT AGREE TO ALL OF THESE TERMS, THEN
              YOU MAY NOT ACCESS OR USE THE SITE. COMPANY’S ACCEPTANCE OF YOUR
              ACCESS TO OR USE OF THE SITE IS EXPRESSLY CONDITIONED UPON YOUR ASSENT
              TO ALL OF THESE TERMS.
              These Terms govern your access to and use of the Site provided by Company.
              The information available on this website is for general information purposes only. The
              information is provided by https://fitbuddy.co.in a property of E-Trainers Analytics Wizard Pvt
              Ltd. Any reliance you place on such information is therefore strictly at your own risk.</p><br></br><br></br>
            <p className={home.center_bold}>2. RIGHTS AND OBLIGATIONS OF USER</p><br></br>
            <p className={home.simple}>Any use of the Website is entirely at your own risk. We are not liable for damages resulting
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
            <p className={home.center_bold}>3. LIMITATION OF LIABILITY</p><br></br>
            <p className={home.simple}>In no event will we be liable for any loss or damage including without limitation, indirect or
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
            <p className={home.center_bold}>4. CHANGEABILITY</p><br></br>
            <p className={home.simple}>We reserve the right to change or modify these Terms or any Policy and the Site we offer at any
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
            <p className={home.center_bold}>5. WARRANTY AND REPRESENTATION</p><br></br>
            <p className={home.simple}>We make no representations or warranties of any kind, express or implied, about the
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
            <p className={home.center_bold}>6. CONSENT</p><br></br>
            <p className={home.simple}>By using the website, you hereby give consent to our disclaimer and agree to its terms and
              conditions as mentioned above in this document. The consent given shall be free consent of
              the parties and assumed to be not caused by coercion, undue influence, fraud,
              misrepresentation or mistake.
              Each user by using this website, shall be deemed to have consented to be bound by all of the
              terms and conditions of this Website. And, they agree that you have understand our
              company’s terms and expressly consents to website monitoring of system whenever use at
              all times.</p><br></br><br></br>
            <p className={home.center_bold}>7. INTELLECTUAL PROPERTY RIGHTS</p><br></br>
            <p className={home.simple}>E-Trainers Analytics Wizard Pvt. Ltd. retains all rights relating to patent, trademark, copyright
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
            <p className={home.center_bold}>8. EXTERNAL LINKS & THIRD PARTY SERVICES</p><br></br>
            <p className={home.simple}>This website may contain links to other websites, which are controlled and owned by third
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
            <p className={home.center_bold}>9. GOVERNING LAWS</p><br></br>
            <p className={home.simple}>This website and disclaimer shall be governed by and construed by following all applicable
              laws of India.
              Recognizing the global nature of the internet and the rapid changes around online privacy, you
              agree to comply with all local rules regarding online conduct and acceptable content. Without
              limiting the foregoing, you agree to comply with all applicable laws regarding the transmission of
              technical data exported to or from the India or in the country in which you operate or reside and
              to comply with any other local laws affecting the Site.
            </p><br></br><br></br>
            <p className={home.center_bold}>10. DISPUTE RESOLUTION</p><br></br>
            <p className={home.simple}>This website and disclaimer shall be governed by and construed by following all applicable
              laws of India. All disputes arising out of or in connection with this disclaimer or use of this
              website shall be resolved through arbitration under the supervision of the Honourable Court,
              who has the jurisdiction of the registered office of E-Trainers Analytics Wizard Pvt. Ltd. The
              sole arbitrator will be appointed by the consent of both the parties at the time of dispute and the
              expenses of the dispute shall be collected from the party who arises the dispute and after the
              decision of the arbitrator it shall be collected from the Judgment debtor.
              Disputes arising in relation hereto shall be subject to the exclusive jurisdiction of courts, tribunals,
              fora, applicable authorities at Delhi.
            </p><br></br><br></br>
            <p className={home.center_bold}>11. AMENDMENTS</p><br></br>
            <p className={home.simple}>E-Trainers Analytics Wizard Pvt. Ltd reserves the right to amend or change the information
              provided on this website, including the terms of this disclaimer, at any time and without giving
              prior notice. It shall be your responsibility to check this Terms of Use periodically for changes.
              Your continued use of the Platform following the posting of changes to this Terms of Use on the
              Platform, will constitute Your consent and acceptance of those changes.
            </p><br></br><br></br>
            <p className={home.center_bold}>12. VIOLATION OF THE TERMS OF USE</p><br></br>
            <p className={home.simple}>You agree that any violation by You of these Terms of Use will constitute an unlawful and unfair
              business practice, and will cause irreparable harm to the Company and/or Vendors, as the case may
              be, for which monetary damages would be inadequate, and You consent to the Company and/or
              Vendors obtaining any injunctive or equitable relief that they deem necessary or appropriate in
              such circumstances. These remedies are in addition to any other remedies that the Company and/or
              Vendors obtaining may have at law or in equity. If the Company and/or Vendors takes any legal
              action against You as a result of Your violation of these Terms of Use, they will be entitled to
              recover from You, and You agree to pay, all reasonable lawyers/advocates’ fees and costs of such
              action, in addition to any other relief that may be granted.
            </p><br></br><br></br>
            <p className={home.center_bold}>13. CONTACT INFORMATION</p><br></br>
            <p className={home.simple}>In case of any queries regarding the disclaimer.
              Email id: admin@fitbuddy.co.in
            </p><br></br><br></br>
            <p className={home.center_bold}>14. GRIEVANCE REDRESSAL</p><br></br>
            <p className={home.simple}>Any complaints, concerns, issue, doubts and claims with regards to the content shall be
              taken up with the designated Grievance Officer as details mentioned under previous Clause 13
              and the grievance officer shall reach out to you and will ensure to take preventive steps against
              the query which has been raised by you.</p><br></br><br></br>
            <p className={home.bold_italiac}>Copyright © All rights reserved.<br></br>
              Last updated June 2021.</p>
          </div>
        </div>
      </div>

    </>
  )
}