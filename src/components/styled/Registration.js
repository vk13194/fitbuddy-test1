import styled from "styled-components";

const TextInputs = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .head {
    margin-top: 2rem;
    justify-content: space-between;
    display: flex;
    align-items: center;
    color: #8cc63e;
    font-size: 6rem;
    width: 25vw;
  }
  .head p {
    color: black;
    font-family: Font_bold;
    font-size: 2rem;
  }
  .details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 8rem;
    margin-top: 2rem;
    text-align: left;
  }
  .details p {
    font-family: Font_smedium;
    font-size: 2rem;
    margin: 1.5rem 0;
  }
  .gender {
    font-family: Font_medium;
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 0 2px #a3a3a3;
    background-color: transparent;
    color: #a3a3a3;
    padding: 0.4rem 1.5rem;
    outline: none;
    border-radius: 3rem;
    transition: all ease 0.2s;
  }
  .gender_unselected:hover {
    box-shadow: 2px 2px 8px grey;
  }
  .gender:active {
    transform: scale(98%);
  }
  .gender:focus {
    border: 2px transparent;
    color: white;
    background: rgb(162, 185, 51);
    background: linear-gradient(
      180deg,
      rgba(162, 185, 51, 1) 67%,
      rgba(83, 94, 25, 1) 98%
    );
    box-shadow: 2px 2px 4px grey;
  }
  .gender_selected{
    font-family: Font_medium;
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
    padding: 0.4rem 1.5rem;
    outline: none;
    border-radius: 3rem;
    transition: all ease 0.2s;


    border: 2px transparent;
    color: white;
    background: rgb(162, 185, 51);
    background: linear-gradient(
      180deg,
      rgba(162, 185, 51, 1) 67%,
      rgba(83, 94, 25, 1) 98%
    );
    box-shadow: 2px 2px 4px grey;
  }
  .gender_unselected{
    font-family: Font_medium;
    font-size: 1.3rem;
    margin-right: 1rem;
    cursor: pointer;
    border: none;
    box-shadow: 0 0 0 2px #a3a3a3;
    background-color: transparent;
    color: #a3a3a3;
    padding: 0.4rem 1.5rem;
    outline: none;
    border-radius: 3rem;
    transition: all ease 0.2s;

  }
  .details input {
    outline: none;
    font-size: 1.5rem;
    font-family: Font_smedium;
    border: none;
    border-bottom: 2px solid grey;
  }
  .details input:focus{
   border-bottom: 2px solid red; 
  }

  .ctr_1 {
  }
  .ctr_2 {
  }
`;

const User = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  .lower_ctr {
    display: flex;
    justify-content: space-between;
  }
  .slider_ctr {
    text-align: left;
    margin: 8rem 4rem;
    width: 60vw;
  }
  .slider_ctr p {
    font-family: Font_smedium;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .bottom_left_ctr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 12rem;
    margin-top: 4rem;
    height: 28rem;
  }
`;
const TickCtr = styled.button`
  height: 10rem;
  width: 10rem;
  align-self: flex-end;
  font-size: 8rem;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a3a3a3;
  cursor: pointer;
  outline: none;
  margin: 0 auto !important;

  &:focus {
    background-color: #a2b933;
    color: white;
    box-shadow: 2px 2px 4px grey;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    animation: moveInBottom 0.2s ease-out;
  }
  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: scale(0%);
    }
    100% {
      opacity: 1;
      transform: scale(100%);
    }
  }
`;
const Trainer = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  .lower_section {
    display: flex;
  }
  .bottom_left_ctr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 12rem;
    margin-top: 4rem;
    height: 28rem;
  }
  .trainer_details {
    padding: 2rem 8rem 4rem;
  }
  .label_txtarea {
    text-align: left;
    font-size: 1rem;
    font-family: Font_smedium;
  }
  textarea {
    outline: none;
    padding: 1rem;
    text-align: left;
    height: 80%;
    width: 70vw;
    border: 2px solid #a3a3a3;
    border-radius: 1rem;
    font-size: 1rem;
    font-family: Font_smedium;
  }
  .row_1{
    text-align: left;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-family: Font_smedium;
    margin: 1rem 0;
  }
  .row_2 {
    text-align: left;
    display: flex;
    font-size: 1rem;
    font-family: Font_smedium;
    margin: 1rem 0;
  }
  
  .row_2 p {
    display: flex;
  }
  .row_2 p p {
    font-size: 0.8rem;
  }
  .trainer_details select,
  .trainer_details input {
    width: 12rem;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 2px solid #a3a3a3;
    outline: none;
  }
  .plus_button{
    border-radius: 50%;
background-color: white;
border: 2px solid gray;
width: 40px;
height: 40px;
cursor:pointer;
  }

  .div_style{
    width: 12rem;
    font-size: 1rem;
    padding: 0.5rem;
    border-radius: 8px;
    border: 2px solid #a3a3a3;
    outline: none;
  }
  .something{
    width: 100px;
    height: 100px; 
    background-color: blue;
  }

`;

const ProfileImage = styled.div`
  height: max-content;
  width: max-content;
  padding: 1rem 2rem;
  background-color: #8cc63e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  input[type="file"] {
    display: none;
  }
  label {
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
    background-color: #eeeeee;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background-size: cover;
  }
  label p {
    position: absolute;
    font-family: Font_medium;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.8rem 0;
    background-color: #0000003b;
  }
`;

export { TextInputs, User, ProfileImage, Trainer, TickCtr };
