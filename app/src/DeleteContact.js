import React, { Fragment, useEffect, useState } from "react";

import * as apiClient from "./apiClient";

const DeleteContact = (props) => {
  const [contact_id, setContactId] = useState(props.contact.contact_id);
  console.log(contact_id);

  const deleteTheContact = (e) => {
    e.preventDefault();
    setContactId(contact_id);
    apiClient.deleteContact(contact_id).then(alert("deleted"));
  };

  return (
    <div>
      <button
        className="btn btn-danger"
        key={contact_id}
        onClick={(e) => deleteTheContact(e)}
      >
        Delete
      </button>
    </div>
  );
};
export default DeleteContact;
