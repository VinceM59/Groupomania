const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/post");

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.get("/", auth, postCtrl.findAllPosts);
router.post("/", auth, multer, postCtrl.createPost);
router.get("/:id", auth, postCtrl.findOne);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.delete("/:id", auth, postCtrl.deletePost);

module.exports = router;
