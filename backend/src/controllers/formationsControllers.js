const models = require("../models");

const browse = (req, res) => {
  models.Formations.findAll()
    .then(([data]) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
