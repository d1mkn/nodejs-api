import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const updateContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404);
  res.json(result);
};

export default updateContactById;
