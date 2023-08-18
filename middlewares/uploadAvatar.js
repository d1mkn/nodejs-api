import multer from "multer";
import path from "path";

const tempDir = path.resolve("tmp");

const multierConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({
  storage: multierConfig,
});

export default uploadAvatar;
