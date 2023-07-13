const Joi = require("joi");

const checkUserData = (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }).validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json({ msg: "invalid user" });
  } else {
    next();
  }
};

module.exports = {
  checkUserData,
};
