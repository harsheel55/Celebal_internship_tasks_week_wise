const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(1).max(120).optional()
});

const weatherSchema = Joi.object({
  city: Joi.string().min(2).max(100).required(),
  country: Joi.string().length(2).optional()
});

module.exports = {
  userSchema,
  weatherSchema
};