import HttpError from "../helpers/HttpError.js";

const isEmptyBody = (req, _, next) => {
  const { length } = Object.keys(req.body);
  if (!length) {
    next(HttpError(400, "fields must be required"));
  }
  next();
};

export default isEmptyBody;
