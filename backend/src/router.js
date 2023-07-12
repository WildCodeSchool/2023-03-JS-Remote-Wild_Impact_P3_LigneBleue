const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tutos", TutoControllers.browse);
router.get("/tutos/:id", TutoControllers.read);

const formationsControllers = require("./controllers/formationsControllers");

router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);
router.get("/formations/:id/tutorials", formationsControllers.browseTutorials);

const quizzControllers = require("./controllers/quizzControllers");

router.get("/quizz", quizzControllers.browse);
router.get("/quizz/:id", quizzControllers.read);

const { checkUser } = require("./services/user");
const authControllers = require("./controllers/authControllers");

router.post("/signup", checkUser, authControllers.signup);

module.exports = router;
