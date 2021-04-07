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

function App() {
  //Under construction
  const history=useHistory();
  localStorage.removeItem("token");
  var item=localStorage.getItem("token");
  let loggedIn=false;
  let url="/";
  let hcomponent="Home";
  if(item!=null) 
  {
    loggedIn=true;
    var role=JSON.parse(atob(item.split(".")[1])).role;
    if(role == "customer")
    {
      url="/user/profile"
      hcomponent=User_profile;
    }
    else if(role == "trainer")
    {
      url="/trainer/profile";
      hcomponent=Trainer_profile;
    }
  }

  return (
    <div className="App">
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
          <Route exact path="/user/profile" component={User_profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signup/trainer" component={Trainer_details} />
          <Route exact path="/signup/user" component={User_details} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
