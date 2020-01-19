import React from "react";

export default function Login() {
  return (
    <form method="post" onsubmit={() => alert("submitted")}>
      <h4>Login</h4>
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" placeholder="E-Mail" required />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
