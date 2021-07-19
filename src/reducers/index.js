import { combineReducers } from "redux";
import adminPanelReducer from "./adminPanelReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
  Admin: adminPanelReducer,
  auth: authReducer,
});
export default rootReducer
