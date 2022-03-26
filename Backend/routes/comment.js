const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");

router.get("/", commentCtrl.findAllComments);
router.post("/", commentCtrl.createComment);
router.get("/:id", commentCtrl.findOneComment);
router.delete("/:id", commentCtrl.deleteComment);
module.exports = router;
