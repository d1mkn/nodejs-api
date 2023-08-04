import { Contact } from "../../models/index.js";

const addContact = async (req, res, next) => {
  const result = await Contact.create(req.body);
  console.log(req);
  res.status(201).json(result);
};

export default addContact;
