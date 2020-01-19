import React from "react";

export default function Register() {
  return (
    <form method="post" onSubmit={() => alert("submitted")}>
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
