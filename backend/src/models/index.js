require("dotenv").config();

const mysql = require("mysql2/promise");

// create a connection pool to the database

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// try a connection

pool.getConnection().catch(() => {
  console.warn(
    "Warning:",
    "Failed to get a DB connection.",
    "Did you create a .env file with valid credentials?",
    "Routes using models won't work as intended"
  );
});

// declare and fill models: that's where you should register your own managers

const models = {};

const ItemManager = require("./ItemManager");

models.item = new ItemManager();
models.item.setDatabase(pool);

const TutorialsManager = require("./TutorialsManager");

models.tutorials = new TutorialsManager();
models.tutorials.setDatabase(pool);

const QuizzManager = require("./QuizzManager");

models.quizz = new QuizzManager();
models.quizz.setDatabase(pool);

const FormationsManager = require("./FormationsManager");

models.Formations = new FormationsManager();
models.Formations.setDatabase(pool);

const UserManager = require("./UserManager");

models.users = new UserManager();
models.users.setDatabase(pool);

const RessourcesManager = require("./RessourcesManager");

models.ressources = new RessourcesManager();
models.ressources.setDatabase(pool);

const ImagesManager = require("./ImagesManager");

models.images = new ImagesManager();
models.images.setDatabase(pool);

const QuestionsManager = require("./QuestionsManager");

models.questions = new QuestionsManager();
models.questions.setDatabase(pool);

const AnswersManager = require("./AnswersManager");

models.answers = new AnswersManager();
models.answers.setDatabase(pool);

// bonus: use a proxy to personalize error message,
// when asking for a non existing model

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};

module.exports = new Proxy(models, handler);
