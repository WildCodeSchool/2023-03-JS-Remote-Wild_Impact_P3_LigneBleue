const models = require("../models");

const browse = (req, res) => {
  models.ressources
    .findAll()
    .then(([ressources]) => {
      res.status(200).json(ressources);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
