import * as React from "react";

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
    <form action="/action_page.php" onSubmit={onSubmit}>
      <div class="form-group">
        <label>
          First Name:
          <input
            onChange={(e) => setFirstName(e.currentTarget.value)}
            value={first_name}
            name="first_name"
            className="form-control"
            required
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          Last Name:
          <input
            onChange={(e) => setLastName(e.currentTarget.value)}
            value={last_name}
            name="last_name"
            className="form-control"
            required
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          Phone Number:
          <input
            onChange={(e) => setPhone(e.currentTarget.value)}
            value={phone_number}
            name="phone_number"
            className="form-control"
            required
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          Email:
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            value={email}
            name="email"
            className="form-control"
            required
          />
        </label>
      </div>
      <div class="form-group">
        <label>
          Notes:
          <input
            onChange={(e) => setNotes(e.currentTarget.value)}
            value={notes}
            name="notes"
            className="form-control"
            required
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default CreateContact;

{
  /* <form action="/action_page.php">
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email">
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="pwd">
  </div>
  <div class="form-group form-check">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */
}

{
  /* <form action="/action_page.php" onSubmit={onSubmit}>
      <div class="form-group">
      <label>
        First Name:{" "} </label>
        <input
          onChange={(e) => setFirstName(e.currentTarget.value)}
          value={first_name}
          name="first_name"
          required
        />
        </div>
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
    </form> */
}
