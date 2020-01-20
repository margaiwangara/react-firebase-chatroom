import React, { useContext, useCallback, useEffect, useState } from "react";
import app from "../base";
import { AuthContext } from "./Auth";
import firebase from "firebase";
import Message from "./Message";

export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});

  const handleKeyDown = function(e) {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();

      // clear
      e.target.value = "";
    }
  };

  const handleSubmit = useCallback(async () => {
    try {
      const userId = await app.auth().currentUser.email;
      await firebase
        .database()
        .ref("messages")
        .push()
        .set({
          userId,
          message,
          dateSent: Date.now()
        });

      console.log("Message Sent");
    } catch (error) {
      console.log(error);
    }
  }, [message]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await firebase
          .database()
          .ref("messages")
          .orderByChild("dateSent");
        response.on("value", function(snapshot) {
          setMessages(snapshot.val());
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchMessages();
  }, []);

  let messageDisplay;
  messageDisplay =
    !!messages &&
    Object.entries(messages).map(msg => <Message key={msg[0]} data={msg[1]} />);

  return (
    <div>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
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

      <div
        style={{ overflowY: "auto", overflowX: "hidden" }}
        className="chat-area bg-light d-flex flex-column border border-secondary"
      >
        {messageDisplay}
      </div>
      <form method="post">
        <input
          type="text"
          name="message"
          placeholder="Message"
          className="form-control"
          onChange={e => setMessage(e.target.value)}
          value={message}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
}
