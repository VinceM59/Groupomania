require("dotenv").config();
const Sequelize = require("sequelize");
const db = {};

let sequelize;
sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user.js")(sequelize, Sequelize);
db.posts = require("./post.js")(sequelize, Sequelize);
db.comments = require("./comment.js")(sequelize, Sequelize);
db.likes = require("./like.js")(sequelize, Sequelize);

module.exports = db;
/**
 * users :
 *  - id
 *  - email
 *  - password
 *  - picture
 *  - biography
 *  -role
 *
 * posts :
 *  - id
 *  - user_id
 *  - content
 *  - picture (url)
 *  - created_at
 *
 * comments :
 *  - id
 *  - post_id
 *  - user_id
 *  - content
 *  - picture ?? à vérifier
 *
 *
 *
 */
