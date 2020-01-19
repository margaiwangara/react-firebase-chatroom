import React, { useCallback, useContext } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import app from "../base";
import { AuthContext } from "./Auth";

function Register({ history }) {
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        // update profile

        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <form method="post" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="display-5 m-0 p-0 text-center">Register</legend>
        <hr />
        {/* <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            placeholder="Username"
            required
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            className="form-control"
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
          />
        </div> */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </fieldset>
      <hr />
      <small className="text-muted">
        Already a member?<Link to="/login"> Login</Link>
      </small>
    </form>
  );
}

export default withRouter(Register);
