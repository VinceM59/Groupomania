const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      models.likes.belongsTo(models.users, {});
      models.likes.belongsTo(models.posts, {});
    }
  }
  Like.init(
    {},
    {
      sequelize,
      tableName: "likes",
      modelName: "Like",
    }
  );
  return Like;
};
