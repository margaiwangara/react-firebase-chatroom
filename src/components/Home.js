import React from "react";
import app from "../base";

export default function Home() {
  return (
    <>
      <h3>Homepage</h3>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </>
  );
}
