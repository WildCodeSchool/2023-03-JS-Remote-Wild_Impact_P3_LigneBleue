const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tuto", TutoControllers.browse);
router.get("/tuto/:id", TutoControllers.read);
router.put("/tuto/:id", TutoControllers.edit);
router.post("/tuto", TutoControllers.add);
router.delete("/tuto/:id", TutoControllers.destroy);

module.exports = router;
