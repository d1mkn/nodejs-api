import fs from "fs/promises";
import path from "path";
import jimp from "jimp";
import { User } from "../../models/index.js";

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.resolve(avatarsDir, fileName);

  const image = await jimp.read(tempUpload);
  image.resize(250, 250);
  await image.writeAsync(tempUpload);

  await fs.rename(tempUpload, resultUpload);

  const avatarURL = path.join("avatars", fileName);

  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({
    avatarURL: avatarURL,
  });
};

export default updateAvatar;
