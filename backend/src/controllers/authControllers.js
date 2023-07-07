// const models = require("../models");
const argon2 = require("argon2");

const user = {
  email: "test@test.com",
  password: "test",
};

const hashing = (password) => {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    time: 5,
  });
};

const signup = async (req, res) => {
  const hashPassword = await hashing(req.body.password);
  console.info(hashPassword);
  // console.log("On avance");
  // console.log(req.body);
  // 1 = vérification des données du req.body
  // 2 = vérifier si l'email / password sont OK
  res.status(200).json({ msg: "Connected" });
};

module.exports = {
  signup,
};

const sum = (a, b) => {
  return a + b;
};

sum(22, 33);
