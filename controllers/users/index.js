import { ctrlWrapper } from "../../decorators/index.js";
import registerUser from "./registerUser.js";
import loginUser from "./loginUser.js";
import getCurrentUser from "./getCurrentUser.js";
import logoutUser from "./logoutUser.js";
import updateAvatar from "./updateAvatar.js";
import verifyUser from "./verifyUser.js";
import resendVerifyEmail from "./resendVerifyEmail.js";

const usersController = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logoutUser: ctrlWrapper(logoutUser),
  updateAvatar: ctrlWrapper(updateAvatar),
  verifyUser: ctrlWrapper(verifyUser),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
};

export default usersController;
