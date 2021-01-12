import React from "react";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let p = () => "Puto";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/puto">
          <div>{p()}</div>
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="*">
          <div>ERROR PAPA</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
