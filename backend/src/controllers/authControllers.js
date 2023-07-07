//const models = require("../models");

const user = {
  email: "test@test.com",
  password: "test",
};

const signup = (req, res) => {
  console.log("On avance");
  console.log(req.body);
  //1 = vérification des données du req.body
  //2 = vérifier si l'email / password sont OK
  res.status(200).json({ msg: "Connected" });
};

module.exports = {
  signup,
};
