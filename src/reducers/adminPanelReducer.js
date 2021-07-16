import {
  FETCH_ADMIN,
  FETCH_ADMIN_VIEWUSERS,
  SESSION_COMPLETE,
} from "../constants/adminContact";
const initState = {
  adminPanel: [],
  adminPanel_ViewUsers: [],
  sessioncomplete:[]
};

const adminPanelReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ADMIN:
      return {
        ...state,
        adminPanel: action.payload,
      };
    case FETCH_ADMIN_VIEWUSERS:
      return {
        ...state,
        adminPanel_ViewUsers: action.payload,
      };
      case SESSION_COMPLETE:
        return {
          ...state,
          sessioncomplete: action.payload,
        };
    default:
      return state;
  }
};
export default adminPanelReducer;
