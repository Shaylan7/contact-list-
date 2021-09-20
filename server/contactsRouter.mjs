import express from "express";

import * as db from "./db.mjs";

const contactsRouter = express.Router();

contactsRouter.get("/", async (request, response) => {
  const contacts = await db.getContacts();
  response.json(contacts);
});

contactsRouter.use(express.json());
contactsRouter.post("/", async (request, response) => {
  const contacts = await db.addContact(request.body.first_name, request.body.last_name, request.body.phone_number, request.body.email, request.body.notes);
  response.status(201).json(contacts);
});

export default contactsRouter;
