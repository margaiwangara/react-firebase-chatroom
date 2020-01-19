import React, { Fragment, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./Auth";
import app from "../base";

export default function Home({ children, ...rest }) {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() =>
        !!currentUser ? (
          <Fragment>
            <h3>Homepage</h3>
            <button onClick={() => app.auth().signOut()}>Sign Out</button>
          </Fragment>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
