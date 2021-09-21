import React from "react";

import DeleteContact from "./DeleteContact";
import EditContactForm from "./Edit";
import ViewContact from "./ViewContact";
import * as apiClient from "./apiClient";

const Contacts = () => {
  const [contacts, setContacts] = React.useState([]);
  console.log(contacts);

  const loadContacts = async () => setContacts(await apiClient.getContacts());

  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <section>
      <ContactList loadContacts={loadContacts} contacts={contacts} />
    </section>
  );
};

const ContactList = ({ contacts, loadContacts }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts != null
          ? contacts.map((contact) => (
              <tr>
                <td>{contact.first_name}</td>
                <td>{contact.last_name}</td>
                <td>
                  <ViewContact contact={contact} />
                </td>
                <td>
                  <EditContactForm
                    loadContacts={loadContacts}
                    contact={contact}
                  />
                </td>
                <td>
                  <DeleteContact
                    loadContacts={loadContacts}
                    contact={contact}
                  />
                </td>
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default Contacts;

// const ContactList = ({ contacts }) => (
//   <ul>
//     {contacts != null
//       ? contacts.map((contact) => (
//           <li>
//             {contact.first_name} <ViewContact contact={contact} />{" "}
//             <EditContactForm contact={contact} />{" "}
//           </li>
//         ))
//       : null}
//   </ul>
// );
