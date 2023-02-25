const Joi = require("joi");

const signup = Joi.object().keys({
  username: Joi.string().alphanum().required(),
  password: Joi.string().min(8).alphanum().required(),
});

module.exports = { signup };
