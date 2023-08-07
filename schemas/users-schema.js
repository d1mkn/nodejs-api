import Joi from "joi";

const userRegisterSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .messages({
      "any.required": 'missing required "email" field',
    }),
  password: Joi.string().min(6).required().messages({
    "any.required": 'missing required "password" field',
  }),
});

const userLoginSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "any.required": 'missing required "password" field',
  }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required()
    .messages({
      "any.required": 'missing required "email" field',
    }),
});

export default {
  userRegisterSchema,
  userLoginSchema,
};
