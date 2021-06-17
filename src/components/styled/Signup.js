import styled from "styled-components";

const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  user-select: none;
  display: flex;
  width: 100vw;
  height: 100vh;
  font-family: Font_smedium;
  color: #4a4a4a;
  input[type="radio"] {
    margin-top: 1rem;
    outline: none;
  }
  .decor_txt {
    position: absolute;
    z-index: 9;
    display: flex;
    flex-direction: column;
    font-family: Font_bold;
    font-size: 4rem;
    color: #3f3d56;
    align-items: flex-start;
    margin: 5.5rem 0 0 12rem;
    text-shadow: 2px 2px 4px #0000004a;
  }
  @media (max-width:1440px){
    .decor_txt{
      margin: 6rem 0 0 9rem;
      font-size: 3.5rem;    
    }
  }
  @media (max-width:1200px){
    .decor_txt{
      margin: 5rem 0 0 8rem;
      font-size: 3rem;    
    }
  }
  @media (max-width:1040px){
    .decor_txt{
      margin: 4rem 0 0 7rem;
      font-size: 2.8rem;    
    }
  }
  .decor_txt p {
    color: #a3bb33;
  }
  .img_dec {
    width: 50%;
    position: absolute;
    bottom: 0;
    filter: drop-shadow("2px 2px solid black");
  }
  .form_sec {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form_ctr {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 4px #a3bb33;
    padding: 2rem;
    border-radius: 4px;
    width: max-content;
    height: max-content;
    align-items: center;
    padding: 1rem;
    transition: all ease 0.2s;
  }
  .form_ctr:hover {
    box-shadow: 0px 0px 16px #a3bb33bf;
  }
  .logo {
    height: 8rem;
    margin-bottom: 2rem;
  }
  .dropdown {
    width: 18rem;
    color: #4a4a4a;
    display: flex;
    align-items: center;
    border: 2px solid #4a4a4a;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    font-size: 1.2rem;
    position: relative;
    cursor: pointer;
  }
  .dropdown_ico {
    position: absolute;
    right: 1rem;
    color: #4a4a4a;
  }
  .dropdown_menu {
    margin-top: 1rem;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: auto;
  }
  .options {
    box-shadow: 2px 2px 4px #3b3b3b87;
    margin-top: 2rem;
    padding: 0.4rem;
    color: #4a4a4a;
    border-radius: 4px;
    background-color: white;
  }
  .dropdown_menu p {
    background-color: #eeeeee;
    margin: 0.2rem 0;
    padding: 0.4rem;
    border-radius: 4px;
  }
  .dropdown_menu p:hover {
    background-color: #dddddd;
  }
  .input_ctr {
    margin: 1rem 0;
    width: 18rem !important;
    border: 2px solid #4a4a4a;
    border-radius: 2rem;
    padding: 0.8rem 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
  }
  .continue {
    margin: 1rem 0;
    padding: 0.4rem 1.5rem;
    font-size: 1.5rem;
    color: white;
    background: rgb(159, 182, 50);
    background: linear-gradient(
      180deg,
      rgba(159, 182, 50, 1) 47%,
      rgba(85, 97, 26, 1) 85%
    );
    border: none;
    border-radius: 2rem;
    outline: none;
    cursor: pointer;
    font-family: Font_medium;
    box-shadow: 2px 2px 4px #808080c9;
    transition: ease 0.1s;
  }
  .continue:hover {
    box-shadow: 2px 2px 8px #808080bf;
  }
  .continue:active {
    transform: scale(99%);
  }
  .input_ctr input {
    font-size: 1.2rem;
    margin-left: 1rem;
    width: 100%;
    border: none;
    outline: none;
  }
  form {
    font-size: 1rem;
  }
  .tc {
    font-size: 0.8rem;
  }
  .tc a {
    color: #13a89e;
    cursor: pointer;
  }
  .continueWith {
    color: black;
    font-family: Font_medium;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .media_ctr {
    display: flex;
    margin: 1rem 0;
    color: #a3bb33;
    font-size: 3rem;
  }
  .media_ctr > * {
    margin: 0 0.4rem;
    cursor: pointer;
  }
`;

export { Container };
