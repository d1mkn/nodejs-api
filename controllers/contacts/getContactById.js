import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

export default getContactById;
