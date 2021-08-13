import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/RoutePages/HomePage";
import CoursePage from "./RoutePages/CoursePage";
import PayMents from "./RoutePages/PayMentPage";
import LoginPage from "./RoutePages/loginPage";
import LogoutPage from "./RoutePages/LogoutPage";
import RegPage from "./RoutePages/RegPage";
import AccountPage from "./RoutePages/AccountPage";
import NotFound from "./RoutePages/NotFound404";
import  ScrollToTop from "./Components/ScrollToTop"
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/logout" component={LogoutPage} exact />
          <Route path="/register" component={RegPage} exact />
          <Route path="/Courses" component={CoursePage} exact />
          <Route path="/Course/Payment" component={PayMents} exact />
          <Route path="/account" component={AccountPage} exact />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
