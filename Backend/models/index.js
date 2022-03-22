require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

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
