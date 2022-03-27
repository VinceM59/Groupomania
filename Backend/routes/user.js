const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

router.get("/", userCtrl.findAllUsers);
router.get("/:id", userCtrl.findOneUser);
router.get("/:id", userCtrl.findAllUserName);
router.put("/;id", userCtrl.modifyUser);

module.exports = router;
