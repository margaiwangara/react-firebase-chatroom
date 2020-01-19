import React, { useCallback, useContext } from "react";
import { withRouter, Redirect, Link } from "react-router-dom";
import app from "../base";
import { AuthContext } from "./Auth";
import { errorHandler } from "../functions";

function Login({ history }) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        errorHandler(error);
      }
    },
    [history]
  );

  // redirect if user is found
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <form method="post" onSubmit={handleLogin}>
      <fieldset>
        <legend className="display-5 m-0 p-0 text-center">Login</legend>
        <hr />
        <div className="form-group">
          <label htmlFor="loginEmail">Email</label>
          <input
            type="email"
            name="email"
            className="form-control px-2"
            placeholder="Email"
            id="loginEmail"
            autoComplete="false"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            name="password"
            className="form-control px-2"
            id="loginPassword"
            placeholder="Password"
            autoComplete="false"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </fieldset>
      <hr />
      <small className="text-muted">
        Not a member?<Link to="/register"> Register</Link>
      </small>
    </form>
  );
}

export default withRouter(Login);
