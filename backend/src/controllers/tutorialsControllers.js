const models = require("../models");

const browse = (req, res) => {
  models.tutorials
    .findAll(req.query.name)
    .then(([tutos]) => {
      res.status(200).json(tutos);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.tutorials
    .find(req.params.id)
    .then(([tuto]) => {
      if (tuto[0] == null) {
        res.sendStatus(404);
      } else {
        res.status(200).json(tuto[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const Tuto = req.body;

  // TODO validations (length, format...)

  Tuto.id = parseInt(req.params.id, 10);

  models.tutorials
    .update(Tuto)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const Tuto = req.body;

  // TODO validations (length, format...)

  models.tutorials
    .insert(Tuto)
    .then(([result]) => {
      res.location(`/tuto/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.tutorials
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
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
  edit,
  add,
  destroy,
};
