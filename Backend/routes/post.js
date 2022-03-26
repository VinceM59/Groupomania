const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

router.get("/", postCtrl.findAllPosts);
router.post("/", postCtrl.createPost);
router.get("/:id", postCtrl.findOne);
router.put("/:id", postCtrl.modifyPost);
router.delete("/:id", postCtrl.deletePost);

module.exports = router;
