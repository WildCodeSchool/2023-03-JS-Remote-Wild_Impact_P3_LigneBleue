const Joi = require("joi");

const checkUser = (req, res, next) => {
  console.log("Request Type:", req.method);

  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }).validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    console.log(error);
    res.status(400).json({ msg: "invalid user" });
  } else {
    next();
  }
};

module.exports = {
  checkUser,
};
