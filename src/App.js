import "./App.css";
import Admin_panel from "./pages/Admin_panel";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import {useHistory} from "react-router-dom";
import Home from "./pages/Home";
import Sessions_completed from "./pages/Sessions_completed";
import Session_details from "./pages/Session_details";
import View_users from "./pages/View_users";
import Pricing_portal from "./pages/Pricing_portal";
import Trainer_profile from "./pages/Trainer_profile";
import User_profile from "./pages/User_profile";
import Trainer_Landing from "./pages/Trainer_Landing";
import Signup from "./pages/Signup";
import Trainer_details from "./pages/Trainer_details";
import User_details from "./pages/User_details";
import About from "./pages/About";
import Pricing_details from "./pages/Pricing_details";
import Otp_screen from "./pages/Otp_screen";
import Session_timing from "./pages/Session_timing";
import Admin_banner_panel from "./pages/Admin_banner_panel";
import Privacy_policy from "./pages/Privacy_policy";
import Terms_and_conditions from "./pages/Terms_and_conditions";
import Policiesfooter from "./pages/Policiesfooter";
import Trainer_register from "./pages/Trainer_register"

function App() {
 
 return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/admin_panel" component={Admin_panel} />
          <Route
            exact
            path="/admin_panel/sessions_completed"
            component={Sessions_completed}
          />
          <Route
            exact
            path="/sessions_completed/session_details/:obj"
            component={Session_details}
          />
          <Route
            exact
            path="/admin_panel/pricing_portal"
            component={Pricing_portal}
          />
          <Route exact path="/admin_panel/view_users" component={View_users} />
          <Route exact path="/trainer" component={Trainer_Landing} />
          <Route exact path="/trainer/profile" component={Trainer_profile} />
          <Route exact path="/user_profile" component={User_profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup/trainer" component={Trainer_details} />
          <Route exact path="/signup/user_details" component={User_details} />
          <Route exact path="/about" component={About} />
          <Route exact path="/pricing_details" component={Pricing_details}/>
          <Route exact path="/otp_screen" component={Otp_screen}/>
          <Route exact path="/session_timing" component={Session_timing}/>
          <Route exact path="/admin_banner_panel" component={Admin_banner_panel}/>
          <Route exact path="/privacy_policy" component={Privacy_policy}/>
          <Route exact path="/terms_and_conditions" component={Terms_and_conditions}/>
          <Route exact path="/trainer_register" component={Trainer_register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
