import getAllContacts from "./getAllContacts.js";
import getContactById from "./getContactById.js";
import addContact from "./addContact.js";
import deleteContactById from "./deleteContactById.js";
import updateContactById from "./updateContactById.js";
import updateContactStatusById from "./updateContactStatusById.js";
import { ctrlWrapper } from "../../decorators/index.js";

const contactsController = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateContactStatusById: ctrlWrapper(updateContactStatusById),
};

export default contactsController;
