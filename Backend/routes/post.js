const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

const auth = require("../middleware/auth");

router.get("/", auth, postCtrl.findAllPosts);
router.post("/", auth, postCtrl.createPost);
router.get("/:id", auth, postCtrl.findOne);
router.put("/:id", auth, postCtrl.modifyPost);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
