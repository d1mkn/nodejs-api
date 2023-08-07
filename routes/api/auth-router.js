import express from "express";
import usersController from "../../controllers/users/index.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { usersSchema } from "../../schemas/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(usersSchema.userRegisterSchema),
  usersController.registerUser
);

export default authRouter;
