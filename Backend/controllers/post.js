const models = require("../models");
const Post = models.posts;
const Comment = models.comments;
const Like = models.likes;
const User = models.users;

exports.createPost = (req, res, next) => {
  console.log("salutations");
  console.log(req.body);
  console.log(req);
  let newPost = {
    content: req.body.post,
    userId: req.body.userId,
  };

  if (req.file) {
    newPost.pictureURL = `${req.protocol}://${req.get("host")}/images/${
      req.file.name
    }`;
  }
  const post = new Post(newPost);

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
  console.log("salut delete post");

  Post.findOne({ where: { id: req.params.id } })
    .then((post) => {
      let token = res.locals.token;
      if (!(post.userId === token.userId || token.isAdmin)) {
        return res.status(401).json({
          error: "Unauthorized",
        });
      }
      Post.destroy({ where: { id: req.params.id } })
        .then(() =>
          Like.destroy({ where: { PostId: req.params.id } }).then(() =>
            Comment.destroy({ where: { PostId: req.params.id } }).then(() =>
              res.status(200).json({ message: "Post supprimé !" })
            )
          )
        )
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllPosts = (req, res, next) => {
  Post.findAll({
    order: [["id", "DESC"]],
    include: [
      { model: User, required: true },
      { model: Comment, required: false, include: User },
    ],
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
