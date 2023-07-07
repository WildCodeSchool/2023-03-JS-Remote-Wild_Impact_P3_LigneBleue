// const models = require("../models");
const argon2 = require("argon2");

const hashing = (password) => {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    time: 5,
  });
};

const signup = async (req, res) => {
  await hashing(req.body.password);
  res.status(200).json({ msg: "Connected" });
};

module.exports = {
  signup,
};
