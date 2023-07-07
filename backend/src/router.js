const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tuto", TutoControllers.browse);
router.get("/tuto/:id", TutoControllers.read);

const formationsControllers = require("./controllers/formationsControllers");

router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);

const quizzControllers = require("./controllers/quizzControllers");

router.get("/quizz", quizzControllers.browse);
router.get("/quizz/:id", quizzControllers.read);

const authControllers = require("./controllers/authControllers");

router.post("/signup", authControllers.signup);

module.exports = router;
