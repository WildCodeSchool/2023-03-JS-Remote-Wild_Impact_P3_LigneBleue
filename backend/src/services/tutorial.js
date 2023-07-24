const Joi = require("joi");

const checkTutorialData = (req, res, next) => {
  const { error } = Joi.object({
    id: Joi.number().optional(),
    name: Joi.string().required(),
    icon: Joi.string().optional().allow(""),
    target: Joi.string().required(),
    explanation: Joi.string().required(),
    src: Joi.string().required(),
    alt: Joi.string().required(),
    image_id: Joi.number().optional().allow(null),
    quizz_id: Joi.number().optional().allow(null),
    formation_id: Joi.number().required(),
    creation_date: Joi.optional(),
  }).validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    res.status(400).json({ msg: "invalid tutorial" });
  } else {
    next();
  }
};

module.exports = {
  checkTutorialData,
};
