const express = require("express");

const router = express.Router();

const tutorialsControllers = require("./controllers/tutorialsControllers");
const formationsControllers = require("./controllers/formationsControllers");
const quizzControllers = require("./controllers/quizzControllers");
const authControllers = require("./controllers/authControllers");

const { checkUserData } = require("./services/user");
const { checkUser } = require("./services/jwt");

router.post("/signup", checkUserData, authControllers.signup);
router.post("/connexion", checkUserData, authControllers.login);

router.get("/tutorials", tutorialsControllers.browse);
router.get("/tutorials/:id", tutorialsControllers.read);
router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);

router.get("/quizz", quizzControllers.browse);
router.get("/quizz/:id", quizzControllers.read);

router.use(checkUser);

module.exports = router;
