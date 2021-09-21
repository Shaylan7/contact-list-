export const getTasks = () => _get("/api/tasks");
export const getContacts = () => _get("api/contacts");

export const addTask = (name) => _post("/api/tasks", { name });
export const addContact = (first_name, last_name, phone_number, email, notes) =>
  _post("/api/contacts", { first_name, last_name, phone_number, email, notes });

export const updateContact = (first_name, contact_id) =>
  _put("/api/contacts", { first_name, contact_id });

export const deleteContact = (contact_id) =>
  _delete("/api/contacts", { contact_id });

const _get = async (url) => (await fetch(url)).json();

const _post = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}

  return result;
};

const _put = async (url, body) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}
  return result;
};

const _delete = async (url, body) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  let result;
  try {
    result = await response.json();
  } catch {}
  return result;
};
