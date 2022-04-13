const models = require("../models");
const User = models.users;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  console.log("Je suis dans le signup");

  console.log(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur crée !" }))
        .catch((error) => res.status(400).json({ error }));
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
};

exports.login = (req, res, next) => {
  console.log("Je suis dans le login");
  User.findAll({
    where: {
      email: req.body.email,
    },
  })
    .then((users) => {
      console.log(users);
      if (!users || users.length !== 1) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      let user = users[0];
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          console.log("je suis dans bcrypt");
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user.id,
            token: jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
          console.log("tout va bien ");
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
