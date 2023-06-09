const express = require("express");

const router = express.Router();

// const itemControllers = require("./controllers/itemControllers");

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

const TutoAdminControllers = require("./controllers/TutoAdminControllers");

router.get("/admin/tuto", TutoAdminControllers.browse);
router.get("/admin/tuto/:id", TutoAdminControllers.read);
router.put("/admin/tuto/:id", TutoAdminControllers.edit);
router.post("/admin/tuto", TutoAdminControllers.add);
router.delete("/admin/tuto/:id", TutoAdminControllers.destroy);

module.exports = router;
