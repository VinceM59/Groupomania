const models = require("../models");
const Post = models.posts;
const Comment = models.comments;
const Like = models.likes;
const User = models.users;

exports.createPost = (req, res, next) => {
  console.log("salutations");
  console.log(req.body);
  const post = new Post({
    content: req.body.post,
    userId: req.body.userId,
    // pictureURL: `${req.protocol}://${req.get("host")}/images/${
    //   req.file.filename
    // }`,
  });

  post
    .save()
    .then(() => res.status(201).json({ message: "Post publié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findOnePost = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      console.log(post);
      res.status(200).json(post);
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyPost = (req, res, next) => {
  const postObject = req.file
    ? {
        ...req.body.post,
        image: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  postUpdateOne(
    { ...postObject, id: req.params.id },
    { where: { id: req.params.id } }
  )
    .then(() => res.status(200).json({ message: "Post modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
  Comment.destroy({ where: { postId: req.params.id } })
    .then(() =>
      like
        .destroy({ where: { postId: req.params.id } })
        .then(() =>
          Post.destroy({ where: { id: req.params.id } }).then(() =>
            res.status(200).json({ message: "Post supprimé !" })
          )
        )
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllPosts = (req, res, next) => {
  Post.findAll({
    order: [["id", "DESC"]],
    include: { model: User, required: true },
  })
    .then((posts) => {
      res.status(200).json({ posts });
    })
    .catch((error) => res.status(400).json(error));
};

/*exports.findAllPostsUser = (req, res, next) => {
  Post.findAll({
    where: { userId: req.params.id },
    order: [["id", "DESC"]],
  })
    .then((post) => {
      res.status(200).json({ posts });
    })
    .catch((error) => res.status(400).json(error));
};*/

exports.findOne = (req, res, next) => {
  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((error) => res.status(404).json({ error }));
};
