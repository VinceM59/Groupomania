const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      models.User.belongsToMany(models.Post, {
        through: models.Like,
        foreignKey: "userId",
        otherKey: "postId",
      });
      models.Post.belongsToMany(models.User, {
        through: models.Like,
        foreignKey: "postId",
        otherKey: "userId",
      });
      models.Like.belongsTo(models.User, { foreignKey: "userId" });
      models.Like.belongsTo(models.Post, { foreignKey: "postId" });
    }
  }
  Like.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "likes",
      modelName: "Like",
    }
  );
  return Like;
};
