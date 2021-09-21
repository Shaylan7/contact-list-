import React, { Fragment, useEffect, useState } from "react";

import * as apiClient from "./apiClient";

// const EditContact = () => {
//   const updateContact = (first_name) =>
//     apiClient.updateContact(first_name).then(alert("you added a new contact"));

//   return (
//     <section>
//       <EditContactForm  {...{ updateContact }} />
//     </section>
//   );
// };

//     const updateFirstName = async = e => {
//          e.preventDefault();
//     try {
//         const body = { first_name };
//         const response = await fetch(`http://localhost:3000/api/contacts/${contact.first_name_ud}`,
//         {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(body)
//         })
//         console.log(response)
//     } catch (err) {
//         console.error(error.message)
//     }
// }
const EditContactForm = (props) => {
  const [first_name, setFirstName] = useState(props.contact.first_name);
  const [contact_id, setContactId] = useState(props.contact.contact_id);

  const updateFirstName = (e) => {
    e.preventDefault();
    setContactId(contact_id);
    setFirstName(first_name);
    apiClient.updateContact(first_name, contact_id).then(props.loadContacts());
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${contact_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${contact_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Contact</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateFirstName(e)}
              >
                Confirm Changes
              </button>
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

export default EditContactForm;
