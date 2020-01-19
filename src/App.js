import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";

// Provider
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12 offset-md-2 offset-xs-1">
              <div className="card mt-5">
                <div className="card-body">
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
