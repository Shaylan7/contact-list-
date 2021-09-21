import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();

export const getTasks = () => db.any("SELECT * FROM tasks");
export const getContacts = () => db.any("SELECT * FROM contact_list ORDER BY first_name");

export const addTask = (name) =>
  db.one("INSERT INTO tasks(name) VALUES(${name}) RETURNING *", { name });

export const addContact = (first_name, last_name, phone_number, email, notes) =>
  db.one("INSERT INTO contact_list(first_name, last_name, phone_number, email, notes) VALUES(${first_name}, ${last_name}, ${phone_number}, ${email}, ${notes}) RETURNING *", { first_name, last_name, phone_number, email, notes });

export const updateContact = (first_name, contact_id) =>
  db.one("UPDATE contact_list SET first_name=${first_name} WHERE contact_id=${contact_id} RETURNING *", { first_name, contact_id})

export const deleteContact = (contact_id) =>
  db.none("DELETE FROM contact_list WHERE contact_id=${contact_id}", {contact_id})


function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
