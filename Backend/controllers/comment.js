const models = require("../models");
const Comment = models.comments;

exports.createComment = (req, res, next) => {
  console.log("salutations");
  const comment = new Comment({
    content: req.body.content,
    userId: req.body.userId,
    postId: req.body.userId,
  });
  comment
    .save()
    .then(() => res.status(201).json({ message: "Commentaire ajouté !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneComment = (req, res, next) => {
  console.log("Je suis dans findOneComment");
  Comment.findOne({ where: { id: req.params.id } })
    .then((comment) => {
      console.log(comment);
      res.status(200).json(comment);
    })
    .catch((error) => res.status(404).json({ error }));
};

//modify ?????

exports.deleteComment = (req, res, next) => {
  Comment.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ message: "Commentaire supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllComment = (req, res, next) => {
  Post.findAll({
    where: { postId: req.params.id },
  })
    .then((comments) => {
      res.status(200).json({ comments });
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.findOneComment = (req, res, next) => {
  Post.findOneComment({ where: { id: req.params.id } })
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((error) => res.status(404).json({ error }));
};
