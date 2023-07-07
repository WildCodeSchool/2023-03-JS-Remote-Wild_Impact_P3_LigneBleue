const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tutos", TutoControllers.browse);
router.get("/tutos/:id", TutoControllers.read);

const formationsControllers = require("./controllers/formationsControllers");

router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);

const quizzControllers = require("./controllers/quizzControllers");

router.get("/quizz", quizzControllers.browse);
router.get("/quizz/:id", quizzControllers.read);

module.exports = router;
