import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";

import Contacts from "./Contacts";
import CreateContact from "./CreateContact";
import Tasks from "./Tasks";

const App = () => (
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="contacts">View All Contacts</Link> |{" "}
      <Link to="createcontact">Create Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<ContactList />} />
      <Route path="/createcontact" element={<CreateAContact />} />
    </Routes>
  </main>
);

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    <p>Welcome to your contacts manager</p>
  </>
);
//could not directly import create contact compononent into the above
const CreateAContact = () => (
  <>
    <CreateContact />
  </>
);

const ContactList = () => (
  <>
    <h1>All Contacts</h1>
    <Contacts />
  </>
);

export default App;
