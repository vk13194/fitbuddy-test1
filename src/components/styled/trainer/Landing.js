import styled from "styled-components";

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  .vw_1 {
    box-sizing: border-box;
    background-color: #a3bb33;
    height: max-content;
    width: 100vw;
    display: flex;
    min-height: 100vh;
    padding: 0 2rem;
  }
  .txt_vw1 {
    margin: auto 0;
    height: max-content;
    width: 50%;
    text-align: left;
  }
  .feature_txt {
    font-size: 2.5rem;
    font-family: Font_medium;
    line-height: 0;
  }
  .app_txt {
    font-size: 5rem;
    font-family: Font_bold;
    line-height: 0;
    color: white;
  }
  .highlights {
    font-size: 2rem;
    font-family: Font_light;
  }
  .v_ctr {
    padding: 0 !important;
  }

  .vw_2 {
    box-sizing: border-box;
    background-color: black;
    height: max-content;
    width: 100vw;
    padding: 0 24rem;
  }
  .header {
    width: max-content;
    color: white;
    font-family: Font_I_thin;
    font-size: 5rem;
    line-height: 0;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  .header_line {
    margin: 0;
    user-select: none;
    color: transparent;
    width: auto;
    border-bottom: 8px solid #a3bb33;
    margin-bottom: 2rem;
    border-radius: 40%;
  }
  .card_content {
    width: 100%;
    justify-content: space-around;
    display: flex;
    height: max-content;
    margin-bottom: 4rem;
  }
`;

const Card = styled.div`
  cursor: pointer;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  width: 24rem;
  text-align: left;
  user-select: none;
  padding: 1rem;
  transition: all ease 0.2s;
  :hover {
    box-shadow: 2px 2px 8px 2px #a3bb33;
  }
  :active {
    transform: translatey(1%);
  }
  img {
    width: 100%;
    height: 20rem;
    box-shadow: 0.4rem 0.4rem 0px 0px #a3bb33;
    margin-bottom: 1rem;
    object-fit: cover;
  }
  .head {
    color: #a3bb33;
    font-family: Font_I_thin;
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  .content {
    font-family: Font_I_thin;
    font-size: 1.2rem;
    color: white;
  }
  p {
    width: 100%;
  }
`;
export { Landing, Card };
