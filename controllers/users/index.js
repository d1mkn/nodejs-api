import { ctrlWrapper } from "../../decorators/index.js";
import registerUser from "./registerUser.js";

const usersController = {
  registerUser: ctrlWrapper(registerUser),
};

export default usersController;
