import React, { Fragment } from "react";

import * as apiClient from "./apiClient";

const ViewContact = (props) => {
  let imgURL = props.contact.image;

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target={`#id${props.contact.contact_id}`}
      >
        View Contact
      </button>

      <div className="modal" id={`id${props.contact.contact_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {imgURL != null ? (
                <img
                  className="rounded-circle"
                  style={{ width: "3em", height: "3em" }}
                  src={imgURL}
                  alt="profile picture"
                />
              ) : (
                <img
                  className="rounded-circle"
                  style={{ width: "3em", height: "3em" }}
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  alt="profile picture"
                />
              )}
              <h4 className="modal-title">
                {" "}
                {props.contact.first_name} {props.contact.last_name}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              Phone Number: {props.contact.phone_number}
              <br></br>
              Email: {props.contact.email} <br></br>
              Notes: {props.contact.notes}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ViewContact;
