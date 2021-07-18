import {LOGIN_TRAINER, LOGOUT_TRAINER} from '../constants/adminContact'
let trainerState
if(window.localStorage.getItem("auth")){
    trainerState=JSON.parse(window.localStorage.getItem("auth"))
  }else{
    trainerState=null
  }
  
const authReducer =(state=trainerState, action)=>{
    switch(action.type){
        case LOGIN_TRAINER:
             return{
                 ...state,
                 ...action.payload
             }
         case LOGOUT_TRAINER:
      return action.payload;
        default:
            return state;
    }
}
export default authReducer;