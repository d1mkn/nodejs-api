import { ctrlWrapper } from "../../decorators/index.js";
import registerUser from "./registerUser.js";
import loginUser from "./loginUser.js";
import getCurrentUser from "./getCurrentUser.js";
import logoutUser from "./logoutUser.js";
import updateAvatar from "./updateAvatar.js";

const usersController = {
  registerUser: ctrlWrapper(registerUser),
  loginUser: ctrlWrapper(loginUser),
  getCurrentUser: ctrlWrapper(getCurrentUser),
  logoutUser: ctrlWrapper(logoutUser),
  updateAvatar: ctrlWrapper(updateAvatar),
};

export default usersController;
