const models = require("../models");
const Post = models.posts;
const Comment = models.comments;
const Like = models.likes;

exports.createPost = (req, res, next) => {
  const post = new Post({
    content: req.body.content,
    userId: req.body.userId,
    image: `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
  });

  post
    .save()
    .then(() => res.status(201).json({ message: "Post publié !" }))
    .catch((error) => res.status(400).json({ error }));
};
