import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
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
      <h4>Login</h4>
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" placeholder="E-Mail" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default withRouter(Login);
