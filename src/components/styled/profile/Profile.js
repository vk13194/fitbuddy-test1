import styled from "styled-components";

const Trainer = styled.div`
  position: absolute;
  height: 100vh;
  width: 65%;
  right: 0;
  display: flex;
  text-align: left;
  .content {
    height: 80vh;
    margin: auto 0;
    align-self: center;
    display: flex;
  }
  .main-image {
    height: 100%;
    box-shadow: 0.4rem 0.4rem 0px 0px #a3bb33;
  }
  .seperator {
    height: 0.2rem;
    margin: 1rem 0;
    width: 100%auto;
    background-color: #a3bb33;
  }
`;
const User = styled.div`
  position: absolute;
  height: 100vh;
  width: 65%;
  right: 0;
  display: flex;
  text-align: left;
  .top-ctr{
    display: flex;
  }
  .content {
    height: 80vh;
    margin: auto 0;
    align-self: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .main-image {
    width: 32rem;
    height: 20rem;
    object-fit: cover;
    margin-right: 2rem;
    box-shadow: 0.4rem 0.4rem 0px 0px #a3bb33;
  }
  .seperator {
    height: 0.2rem;
    margin: 1rem 0;
    width: 100%auto;
    background-color: #a3bb33;
  }
`;
const TextInfo = styled.div`
  width: 24vw;
  .name {
    font-family: Font_bold;
  }
  .designation {
    font-family: Font_light;
  }
  button {
    color: gray;
    font-family: Font_I_regular;
    background-color: transparent;
    border: 2px solid gray;
    height: max-content;
    padding: 0.2rem 1rem;
    border-radius: 1rem;
    margin-left: 4rem;
    cursor: pointer;
    :hover {
      background-color: #eeeeee;
    }
  }
  .about {
    font-family: Font_bold;
  }
  .about-text {
    font-family: Font_light;
  }
  .top-ctr {
    display: flex;
    align-items: center;
  }
`;

export { Trainer, User, TextInfo };
