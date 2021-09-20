import * as React from "react";

import * as apiClient from "./apiClient";
import EditContact from "./Edit";

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
  <ul>
    {contacts.map(({ first_name, last_name }) => (
      <li>{first_name}</li>
    ))}
  </ul>
);

export default Contacts;
