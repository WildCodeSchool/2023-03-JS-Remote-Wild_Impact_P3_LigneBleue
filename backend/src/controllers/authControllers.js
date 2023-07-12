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

module.exports = {
  signup,
};
