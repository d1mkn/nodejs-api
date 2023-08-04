import { Contact } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const deleteContactById = async (req, res, next) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Delete success",
  });
};

export default deleteContactById;
