import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name" field`,
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": `"missing required "email" field`,
    }),
  phone: Joi.number().required().messages({
    "any.required": `missing required "phone" field`,
  }),
});

const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(30),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),

  phone: Joi.string(),
});

export default {
  contactAddSchema,
  contactUpdateSchema,
};
