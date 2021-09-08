import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Optimize from "./components/Optimize";
import Login from './components/auth/Login'
import Register from './components/auth/Register'

function App() {
  return (
    <Router>
      <NavBar></NavBar>

      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="/optimize" component={Optimize} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
