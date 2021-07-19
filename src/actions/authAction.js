import axios from "axios";
//import { LOGIN_TRAINER,LOGOUT_TRAINER } from '../constants/adminContact';

export const loginTrainer = async (user) => {
  await axios.post("http://3.137.209.222:8000/TrainerLogin/", user);
};
