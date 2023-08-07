import { Contact } from "../../models/index.js";

const getAllContacts = async (_, res) => {
  const result = await Contact.find();
  console.log(Contact);
  res.json(result);
};

export default getAllContacts;
