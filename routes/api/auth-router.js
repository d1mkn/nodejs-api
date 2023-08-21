import express from "express";
import usersController from "../../controllers/users/index.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { usersSchema } from "../../schemas/index.js";
import { authenticate } from "../../middlewares/index.js";
import { uploadAvatar } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(usersSchema.userRegisterSchema),
  usersController.registerUser
);

authRouter.get("/verify/:verificationToken", usersController.verifyUser);

authRouter.post(
  "/verify",
  validateBody(usersSchema.userEmailSchema),
  usersController.resendVerifyEmail
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(usersSchema.userLoginSchema),
  usersController.loginUser
);

authRouter.get("/current", authenticate, usersController.getCurrentUser);

authRouter.post("/logout", authenticate, usersController.logoutUser);

authRouter.patch(
  "/avatars",
  authenticate,
  uploadAvatar.single("avatar"),
  usersController.updateAvatar
);

export default authRouter;
