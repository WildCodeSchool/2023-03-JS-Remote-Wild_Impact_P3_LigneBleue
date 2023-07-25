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

const browseRessources = (req, res) => {
  models.ressources
    .findByTutorials(req.params.id)
    .then(([ressources]) => {
      res.status(200).json(ressources);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editTutorial = async (req, res) => {
  const tutorial = req.body;
  tutorial.id = parseInt(req.params.id, 10);

  try {
    const image = await models.images.insert(req.body);
    const tuto = await models.tutorials.insert({
      ...tutorial,
      image_id: image[0].insertId,
    });
    res
      .status(201)
      .json({ ...tutorial, image_id: image[0].insertId, id: tuto[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const add = async (req, res) => {
  const tutorial = req.body;
  try {
    const image = await models.images.insert(req.body);
    const tuto = await models.tutorials.insert({
      ...tutorial,
      image_id: image[0].insertId,
    });
    res
      .status(201)
      .json({ ...tutorial, image_id: image[0].insertId, id: tuto[0].insertId });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const destroy = (req, res) => {
  models.tutorials
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.status(201).json({ msg: "tutoriel Supprimé" });
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
  browseRessources,
  editTutorial,
  add,
  destroy,
};
