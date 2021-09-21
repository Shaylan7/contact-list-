import React from "react";

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
      <ContactList contacts={contacts} />
    </section>
  );
};

const ContactList = ({ contacts }) => (
  <table className="table">
    <thead>
      <tr>
        <th>FirstName</th>
        <th>LastName</th>
      </tr>
    </thead>
    <tbody>
      {contacts != null
        ? contacts.map((contact) => (
            <tr>
              <td>{contact.first_name}</td>
              <td>
                <ViewContact contact={contact} />{" "}
              </td>
              <td>
                <EditContactForm contact={contact} />{" "}
              </td>
            </tr>
          ))
        : null}
    </tbody>
  </table>
);

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
