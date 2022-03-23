const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {}
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
