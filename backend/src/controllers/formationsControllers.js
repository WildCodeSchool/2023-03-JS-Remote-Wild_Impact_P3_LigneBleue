const models = require("../models");

const browse = (req, res) => {
  models.Formations.findAll()
    .then(([formations]) => {
      res.status(200).json(formations);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.Formations.find(req.params.id)
    .then(([formation]) => {
      if (formation[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(formation);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
};
