import * as React from "react";
import { useForm } from "react-hook-form";

import * as apiClient from "./apiClient";

const CreateContact = () => {
  // const [contacts, setContacts] = React.useState([]);

  // const loadContacts = async () => setContacts(await apiClient.getContacts());
  const addContact = (first_name, last_name, phone_number, email, notes) =>
    apiClient
      .addContact(first_name, last_name, phone_number, email, notes)
      .then(alert("you added a new contact"));

  // React.useEffect(() => {
  //   loadContacts();
  // }, []);


 

  return (
    <section>
      <CreateContactForm {...{ addContact }} />
    </section>
  );
};

const CreateContactForm = ({ addContact }) => {

  const [contacts, setContacts] = React.useState("");
  const [first_name, setFirstName] = React.useState("");
  const [last_name, setLastName] = React.useState("");
  const [phone_number, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const canAdd = first_name !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      setFirstName(first_name);
      setLastName(last_name);
      setPhone(phone_number);
      setEmail(email);
      setNotes(notes);
      addContact(first_name, last_name, phone_number, email, notes);
      setContacts("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        First Name:{" "}
        <input
          onChange={(e) => setFirstName(e.currentTarget.value)}
          value={first_name}
          name="first_name"
          required
        />
      </label>
      <label>
        Last Name:{" "}
        <input
          onChange={(e) => setLastName(e.currentTarget.value)}
          value={last_name}
          name="last_name"
          required
        />
      </label>
      <label>
        Phone Number:{" "}
        <input
          onChange={(e) => setPhone(e.currentTarget.value)}
          value={phone_number}
          name="phone_number"
          required
        />
      </label>
      <label>
        Email:{" "}
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          value={email}
          name="email"
          required
        />
      </label>
      <label>
        Notes:{" "}
        <input
          onChange={(e) => setNotes(e.currentTarget.value)}
          value={notes}
          name="notes"
          required
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default CreateContact;
