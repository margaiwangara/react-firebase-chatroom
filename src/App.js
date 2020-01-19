import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </div>
    </Router>
  );
}

export default App;
