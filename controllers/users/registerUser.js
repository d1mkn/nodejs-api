import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import { User } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) throw HttpError(409, "Email in use");

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);
  console.log(gravatar.url());

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

export default registerUser;
