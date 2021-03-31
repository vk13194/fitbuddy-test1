import styled from "styled-components";

const Sidebar = styled.div`
  position: absolute;
  height: 100vh;
  width: 30%;
  background-color: #a3bb33;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .content {
    margin: 0 auto;
  }
  .profile {
    height: 8rem;
    width: 8rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 2px 2px 32px #0000002b;
    font-family: Font_bold;
  }
  .name {
    font-family: Font_medium;
    font-size: 2rem;
    border-bottom: 2px solid black;
  }
  .designation {
    font-family: Font_I_thin;
    font-size: 1.5rem;
    line-height: 0;
  }
  .options {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    font-size: 1.2rem;
  }
  .options p {
    display: flex;
    align-items: center;
    cursor: pointer;
    line-height: 0;
    font-family: Font_smedium;
  }

  .options p:hover {
    opacity: 0.8;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    border-radius: 50%;
    font-size: 1rem;
    padding: 0.2rem;
    margin-right: 0.2rem;
  }
  .logoutbtn {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
  }
  .logout-ico {
    margin-right: 0.2rem;
    font-size: 1.5rem;
    padding: 0.2rem;
    border: 2px solid black;
    border-radius: 50%;
  }
`;

export { Sidebar };
