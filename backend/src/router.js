const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");
const formationsControllers = require("./controllers/formationsControllers");
const quizzControllers = require("./controllers/quizzControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/user");
const { checkUser } = require("./services/jwt");

router.post("/signup", checkUserData, authControllers.signup);
router.post("/connexion", checkUserData, authControllers.login);

router.get("/tutos", TutoControllers.browse);
router.get("/tutos/:id", TutoControllers.read);
router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);
router.get("/formations/:id/tutorials", formationsControllers.browseTutorials);

const quizzControllers = require("./controllers/quizzControllers");

router.get("/quizz", quizzControllers.browse);
router.get("/quizz/:id", quizzControllers.read);

router.use(checkUser);

module.exports = router;
