import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../models/index.js";
import { HttpError } from "../../helpers/index.js";

const { JWT_SECRET } = process.env;

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email or password is wrong");
  const comparePassword = bcrypt.compare(password, user.password);
  if (!comparePassword) throw HttpError(401, "Email or password is wrong");
  const jwtPayload = { id: user._id };
  const token = jwt.sign(jwtPayload, JWT_SECRET, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user.id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

export default userLogin;
