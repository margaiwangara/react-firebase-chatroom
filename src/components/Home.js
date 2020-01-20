import React, { useContext } from "react";
import app from "../base";
import { AuthContext } from "./Auth";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h5 className="display-5 m-0">Chats</h5>
          <small className="m-0 text-uppercase text-primary">
            {currentUser.email}
          </small>
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => app.auth().signOut()}
          >
            Sign Out
          </button>
        </div>
      </div>
      <hr />
      <form method="post">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Username" />
          <div className="input-group-append">
            <button className="btn btn-secondary">Save</button>
          </div>
        </div>
      </form>
      <hr />
      <div className="chat-area bg-light border border-secondary">
        <div className="list-group">
          <div className="list-group-item border-top-0 border-left-0 border-right-0 flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1 text-uppercase text-primary h6">
                {currentUser.email.split("@")[0]}
              </h5>
              <small className="text-secondary text-capitalize">
                20th January 2020
              </small>
            </div>
            <p className="mb-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              expedita.
            </p>
          </div>
        </div>
      </div>
      <form method="post">
        <input type="text" placeholder="Message" class="form-control" />
      </form>
    </div>
  );
}
