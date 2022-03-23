const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {}
  }
  Comment.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: "comments",
      modelName: "Comment",
    }
  );
  return Comment;
};
