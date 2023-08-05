import Joi from "joi";

const contactAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name" field`,
  }),
  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    "any.required": `"missing required "email" field`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required "phone" field`,
  }),
  favorite: Joi.boolean(),
});

const contactUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(30),

  email: Joi.string().email({
    minDomainSegments: 2,
  }),

  phone: Joi.string(),
});

const contactUpdateStatus = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": 'missing field "favorite"',
  }),
});

export default {
  contactAddSchema,
  contactUpdateSchema,
  contactUpdateStatus,
};
