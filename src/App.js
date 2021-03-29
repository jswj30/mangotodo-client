import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./user/Login";
import Main from "./todo/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Login} exact={true} />
        <Route path="/main" component={Main} />
      </div>
    );
  }
}

export default App;
