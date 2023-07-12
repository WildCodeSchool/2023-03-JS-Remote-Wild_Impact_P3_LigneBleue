const argon2 = require("argon2");
const models = require("../models");

const hashing = (password) => {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    time: 5,
  });
};

const signup = async (req, res) => {
  const hash = await hashing(req.body.password);

  models.users
    .insert(req.body.email, hash)
    .then(() => res.status(200).json({ msg: "User created" }))
    .catch(() => res.status(500).json({ msg: "Invalide user" }));
};

const login = (req, res) => {
  // 1 = a partir de l'email récup l'user oui /non ? (find)
  models.users
    .find(req.body.email)
    .then(([user]) => {
      if (user[0]) {
        res.status(200).json(user[0]);
      } else {
        res.status(404).json({ msg: "Invalid credantial" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  // 2 = si oui, comparer les mdp avec argon2
  // 3 = si mdp identique, création d'unn token JWT
  // 4 = répsonse au client avec le token en cooki
};

module.exports = {
  signup,
  login,
};
