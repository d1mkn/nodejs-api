import { Schema, model } from "mongoose";
import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set "name" for contact'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Set "email" for contact'],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, 'Set "phone" for contact'],
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.pre("findOneAndUpdate", handleUpdateValidate);

contactSchema.post("save", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
