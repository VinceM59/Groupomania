const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const auth = require("./middleware/auth");
const helmet = require("helmet");

const authRoutes = require("./routes/auth");
const commentRoutes = require("./routes/comment");
const likeRoutes = require("./routes/like");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

const app = express();

//app.use(helmet({ crossOriginResourcePolicy: false }));
/*app.use((req, res, next) => {
  console.log(req.headers);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});*/

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync().then(console.log("connexion à la BDD"));

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", authRoutes);
app.use("/api/comment", auth, commentRoutes);
app.use("/api/like", auth, likeRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
