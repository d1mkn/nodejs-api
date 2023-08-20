import bcrypt from "bcryptjs";
import gravatar from "gravatar";
import { nanoid } from "nanoid";
import "dotenv/config";
import { User } from "../../models/index.js";
import { HttpError, sendEmail } from "../../helpers/index.js";

const { BASE_URL } = process.env;

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) throw HttpError(409, "Email in use");

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);

  const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href='${BASE_URL}/api/users/verify/${verificationToken}' target='_blank'>Click here to verify email</a>`,
  };

  await sendEmail(verifyEmail);

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: newUser.subscription,
    },
  });
};

export default registerUser;
