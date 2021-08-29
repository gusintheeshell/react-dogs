import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import LoginCreate from "./LoginCreate/LoginCreate";
import LoginPasswordLost from "./LoginPasswordLost/LoginPasswordLost";
import LoginPasswordReset from "./LoginPasswordReset/LoginPasswordReset";

const Login = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LoginForm} />
          <Route path="/create" component={LoginCreate} />
          <Route path="/forgot" component={LoginPasswordLost} />
          <Route path="/reset" component={LoginPasswordReset} />
        </Switch>
      </Router>
    </div>
  );
};

export default Login;
