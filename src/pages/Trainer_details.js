import React from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import {
  Trainer,
  TextInputs,
  ProfileImage,
  TickCtr,
} from "../components/styled/Registration";
import { TiTick } from "react-icons/ti";

export default function Trainer_details() {
  return (
    <Trainer>
      <TextInputs>
        <div className="head">
          <HiOutlineArrowNarrowLeft />
          <p>Trainer Details</p>
          <HiOutlineArrowNarrowRight />
        </div>
        <div className="details">
          <div className="ctr_1">
            <p>Gender</p>
            <button className="gender">Male</button>
            <button className="gender">Female</button>
            <p>Name</p>
            <input type="text" placeholder="Fit XXXXXX" />
          </div>
          <div className="ctr_2">
            <p>Country, City</p>
            <input type="text" placeholder="India, New Delhi" />

            <p>Mobile Number</p>
            <input type="text" placeholder="+91 7800000000" />
          </div>
        </div>
      </TextInputs>
      <div className="lower_section">
        <div className="trainer_details">
          <div>
            <div className="row_1">
              <label>
                <p>Age</p>
                <input placeholder="25" type="number" />
              </label>
              <label>
                <p>Height</p>
                <input placeholder="170cm" type="number" />
              </label>
              <label>
                <p>Weight</p>
                <input placeholder="50kg" type="number" />
              </label>
            </div>

            <div className="row_2">
              <label>
                <p>Session</p>
                <select>
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
                  PSC<p>(per Session Charge)</p>
                </p>
                <input placeholder="₹ 1500" type="number" />
              </label>
            </div>
          </div>
          <label className="label_txtarea">
            <p>Add. Bio. (150-300 words)</p>
            <textarea placeholder="“A certified fitness professional specializing in personal training and weight loss and serves clients in the greater Dallas area. He is accredited with the American Council of Exercise and the National Academy of Sports Medicine.”" />
          </label>
        </div>
        <div className="bottom_left_ctr">
          <ProfileImage>
            <label
              for="file-upload"
              class="custom-file-upload"
              style={{
                backgroundImage: `url()`,
              }}
            >
              <p> Profile Photo</p>
            </label>
            <input id="file-upload" type="file" />
          </ProfileImage>
          <TickCtr>
            <TiTick />
          </TickCtr>
        </div>
      </div>
    </Trainer>
  );
}
