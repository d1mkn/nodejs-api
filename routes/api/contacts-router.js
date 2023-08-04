import express from "express";
import contactsController from "../../controllers/contacts/index.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { contactsSchema } from "../../schemas/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsController.getContactById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchema.contactAddSchema),
  contactsController.addContact
);

contactsRouter.delete("/:id", isValidId, contactsController.deleteContactById);

contactsRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchema.contactUpdateSchema),
  contactsController.updateContactById
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(contactsSchema.contactUpdateStatus),
  contactsController.updateContactStatusById
);

export default contactsRouter;
