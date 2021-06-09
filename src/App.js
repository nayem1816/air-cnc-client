import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <hr />
        <Switch>
          <Route path="/"></Route>
          <Route path="/"> </Route>
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
