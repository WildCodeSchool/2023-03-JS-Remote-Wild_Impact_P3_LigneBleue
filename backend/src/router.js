const express = require("express");

const router = express.Router();

const TutoControllers = require("./controllers/TutoControllers");

router.get("/tuto", TutoControllers.browseUser);
// router.get("/tuto/:id", TutoControllers.readUser);

router.get("/admin/tuto", TutoControllers.browseAdmin);
router.get("/admin/tuto/:id", TutoControllers.readAdmin);
// router.put("/admin/tuto/:id", TutoControllers.editAdmin);
// router.post("/admin/tuto", TutoControllers.addAdmin);
// router.delete("/admin/tuto/:id", TutoControllers.destroyAdmin);

const formationsControllers = require("./controllers/formationsControllers");

router.get("/formations", formationsControllers.browse);

module.exports = router;
