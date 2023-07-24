const models = require("../models");

const browse = (req, res) => {
  models.quizz
    .findAll()
    .then(([quizz]) => {
      res.status(200).json(quizz);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = async (req, res) => {
  try {
    const [quizz] = await models.quizz.find(req.params.id);
    if (quizz[0] == null) {
      res.sendStatus(404);
    } else {
      const [questions] = await models.quizz.findQuestion(req.params.id);
      quizz[0].questions = questions;
      res.status(200).json(quizz[0]);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const quizz = req.body;
  try {
    // 1 => insérer le quizz et get son Id
    const quizzResult = await models.quizz.insert(quizz.title);

    // 2 => avec cet id, insertion des questions récupération des id
    const questions = await Promise.all(
      quizz.questions.map((quest) => {
        return models.questions.insert(quest, quizzResult[0].insertId);
      })
    );

    // 3 => avec ses id, insertion des réponses
    await Promise.all(
      quizz.questions.map((quest, index) => {
        return models.answers.insert(
          quest.answers,
          questions[index][0].insertId
        );
      })
    );

    // 4 => mise à jour de tuto (avec id du quiiz et passer le tuto en mode publié)
    await models.tutorials.updateOnQuizzInsertion(
      quizzResult[0].insertId,
      req.body.tutorialId
    );
    res.status(201).json({ id: quizzResult[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = {
  browse,
  read,
  add,
};
