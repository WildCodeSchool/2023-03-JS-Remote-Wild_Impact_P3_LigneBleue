const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tuto", TutoControllers.browse);
router.get("/tuto/:id", TutoControllers.read);
// router.put("/admin/tuto/:id", TutoControllers.editAdmin);
// router.post("/admin/tuto", TutoControllers.addAdmin);
// router.delete("/admin/tuto/:id", TutoControllers.destroyAdmin);

const formationsControllers = require("./controllers/formationsControllers");

router.get("/formations", formationsControllers.browse);
router.get("/formations/:id", formationsControllers.read);

module.exports = router;
