const models = require("../models");
const User = models.users;
const Post = models.posts;
const comment = models.comments;
const Like = models.likes;

exports.findOneUser = (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((error) => res.status(404).json({ error }));
};

exports.modifyUser = (req, res, next) => {
  const userObject = req.file
    ? {
        ...req.body.userId,
        avatar: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  userUpdateOne(
    { ...userObject, id: req.params.id },
    { where: { id: req.params.id } }
  )
    .then(() => res.status(200).json({ message: "Utilisateur modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users });
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllUserName = (req, res, next) => {
  User.findAll({ where: { lastname: req.params.lastname } })
    .then((users) => {
      console.log(users);
      res.status(200).json(users);
    })
    .catch((error) => res.status(404).json({ error }));
};
