import React from "react";
import app from "../base";

function handleSubmit(event) {
  event.preventDefault();

  const { email, password, username, confirm_password } = event.target.elements;

  app
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .catch(error => {
      console.log("Error Code: ", error.code);
      console.log("\n");
      console.log("Error Message: ", error.message);
    });
}

export default function Register() {
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
