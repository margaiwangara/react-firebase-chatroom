import React from "react";
import Moment from "react-moment";

export default function Message(props) {
  const { message, dateSent: date, userId } = props.data;

  return (
    <div className="list-group justify-self-end">
      <div className="list-group-item border-bottom-0 border-top border-left-0 border-right-0 flex-column align-items-start">
        <div className="d-flex w-100 flex-wrap justify-content-between">
          <h6 className="mb-1 text-uppercase text-primary">{userId}</h6>
          <small className="text-secondary text-capitalize">
            <Moment format="lll">{date}</Moment>
          </small>
        </div>
        <p className="mb-1">{message}</p>
      </div>
    </div>
  );
}
