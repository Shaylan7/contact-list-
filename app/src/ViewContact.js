import React, { Fragment } from "react";

import * as apiClient from "./apiClient";

const ViewContact = (props) => {
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target={`#id${props.contact_id}`}
      >
        View Contact
      </button>

      <div className="modal" id={`id${props.contact_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">
                {props.first_name}
                {props.last_name}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              {props.phone_number}
              {props.email}
              {props.notes}
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
