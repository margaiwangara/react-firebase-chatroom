import React, { useContext } from "react";
import app from "../base";
import { AuthContext } from "./Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="row align-items-center">
      <div className="col">
        <h5 className="display-5">Chats</h5>
      </div>
      <div className="col align-items-end">
        <div className="dropdown">
          <a
            href="#"
            className="btn btn-secondary dropdown-toggle"
            id="dropdownMenuLink"
            data-toggle="dropdown"
          >
            {currentUser.email.split("@")[0]}
          </a>

          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Profile
            </a>
            <a
              href="#"
              onClick={() => app.auth().signOut()}
              className="dropdown-item"
            >
              Sign Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
