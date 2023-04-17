import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import JobPost from "./components/Pages/JobPost/JobPost";
import Register from "./components/Pages/Register/Register";
import International from "./components/Pages/International Jobs/International";
import FresherJobs from "./components/Pages/Fresher Jobs/FresherJobs";
import Companies from "./components/Pages/Companies/Companies";
import TechnologyPark from "./components/Pages/Technology Park/TechnologyPark";

function App() {
  return (
    <Switch>
      <Route path="/jobpost">
        <JobPost />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/internationaljobs">
        <International />
      </Route>
      <Route path="/fresherjobs">
        <FresherJobs />
      </Route>
      <Route path="/companies">
        <Companies />
      </Route>
      <Route path="/technologyparks">
        <TechnologyPark />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
