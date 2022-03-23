const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {}
  }

  Post.init(
    {
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      pictureURL: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "posts",
      modelName: "Post",
    }
  );
  return Post;
};
