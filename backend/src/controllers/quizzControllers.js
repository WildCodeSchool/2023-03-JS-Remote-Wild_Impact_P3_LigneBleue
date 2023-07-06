const models = require("../models");

const browse = (req, res) => {
  models.Quizz.findAll()
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = async (req, res) => {
  try {
    const [quizz] = await models.Quizz.find(req.params.id);
    if (quizz[0] == null) {
      res.sendStatus(404);
    } else {
      const [questions] = await models.Quizz.findQuestion(req.params.id);
      quizz[0].questions = questions;
      res.status(200).json(quizz[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
};
