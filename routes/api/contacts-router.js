import express from "express";
import contactsController from "../../controllers/contacts-controller.js";
import isEmptyBody from "../../middlewares/isEmptyBody.js";
import validateBody from "../../decorators/validateBody.js";
import contactsSchema from "../../schemas/contacts-schema.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsController.getAll);

contactsRouter.get("/:id", contactsController.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchema.contactAddSchema),
  contactsController.add
);

contactsRouter.delete("/:id", contactsController.delete);

contactsRouter.put(
  "/:id",
  isEmptyBody,
  validateBody(contactsSchema.contactUpdateSchema),
  contactsController.updateById
);

export default contactsRouter;
