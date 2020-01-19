import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import app from "../base";

function Register({ history }) {
  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    [history]
  );
  return (
    <form method="post" onSubmit={handleSubmit}>
      <h4>Register</h4>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" placeholder="Username" required />
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" placeholder="E-Mail" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="confirm_password">Confirm Password</label>
      <input
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default withRouter(Register);
