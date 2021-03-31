import React from "react";
import { Landing, Card } from "../components/styled/trainer/Landing";
import { VideoCtr } from "./Home";

export default function Trainer_Landing() {
  return (
    <>
      <Landing>
        <div className="vw_1">
          <div className="txt_vw1">
            <p className="feature_txt">Features of</p>
            <p className="app_txt">APP I.E.</p>
            <p className="highlights">* Workout Template</p>
            <p className="highlights">* Cutomer Profile and Fitness Goals</p>
            <p className="highlights">
              * Group Training Through Live Streaming
            </p>
            <p className="highlights">* Customer Progress Tracking</p>
            <p className="highlights">* Create Customized Fitness Plans</p>
            <p className="highlights">* In-App Messaging</p>
          </div>
          <VideoCtr />
        </div>
        <div className="vw_2">
          <p className="header">
            <p>PARTNERSHIP BENIFITS</p>
            <div className="header_line" />
          </p>
          <div className="card_content">
            <div>
              <Card>
                <p className="head">Boost your personal training revenue.</p>
                <p className="content">
                  - Online coaching platform that helps trainers build
                  elationships and keep clients on track for better health
                  <br />- train more customers in less time to achieve better
                  results. FitBuddy, a cutting edge personal trainer platform,
                  is all you would ever want or need to scale your online
                  training sessions <br />- all in one place. Save time and
                  efforts to deliver incredible coaching exp
                </p>
                <img
                  src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8Zml0bmVzc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="image"
                />
              </Card>
              <Card>
                <p className="head">Boost your personal training revenue.</p>
                <p className="content">
                  - Online coaching platform that helps trainers build
                  elationships and keep clients on track for better health
                  <br />- train more customers in less time to achieve better
                  results. FitBuddy, a cutting edge personal trainer platform,
                  is all you would ever want or need to scale your online
                  training sessions <br />- all in one place. Save time and
                  efforts to deliver incredible coaching exp
                </p>
                <img
                  src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZpdG5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="image"
                />
              </Card>
            </div>
            <div>
              <Card>
                <img
                  src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpdG5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="image"
                />
                <p className="head">Boost your personal training revenue.</p>
                <p className="content">
                  - Online coaching platform that helps trainers build
                  elationships and keep clients on track for better health
                  <br />- train more customers in less time to achieve better
                  results. FitBuddy, a cutting edge personal trainer platform,
                  is all you would ever want or need to scale your online
                  training sessions <br />- all in one place. Save time and
                  efforts to deliver incredible coaching exp
                </p>
              </Card>
              <Card>
                <img
                  src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="image"
                />
                <p className="head">Boost your personal training revenue.</p>
                <p className="content">
                  - Online coaching platform that helps trainers build
                  elationships and keep clients on track for better health
                  <br />- train more customers in less time to achieve better
                  results. FitBuddy, a cutting edge personal trainer platform,
                  is all you would ever want or need to scale your online
                  training sessions <br />- all in one place. Save time and
                  efforts to deliver incredible coaching exp
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Landing>
    </>
  );
}
