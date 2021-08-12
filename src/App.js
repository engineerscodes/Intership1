import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../src/RoutePages/HomePage";
import CoursePage from "./RoutePages/CoursePage";
import PayMents from "./RoutePages/PayMentPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/Courses" component={CoursePage} exact />
          <Route path="/Course/Payment" component={PayMents} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
