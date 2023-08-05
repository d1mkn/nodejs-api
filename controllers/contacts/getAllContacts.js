import { Contact } from "../../models/index.js";

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};

export default getAllContacts;
