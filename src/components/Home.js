import React, { Fragment, useContext } from "react";
import { AuthContext } from "./Auth";
import app from "../base";

export default function Home() {
  console.log(useContext(AuthContext));
  return (
    <Fragment>
      <h3>Homepage</h3>
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </Fragment>
  );
}
