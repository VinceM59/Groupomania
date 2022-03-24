const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });

      models.Post.hasMany(models.Comment, { onDelete: "cascade" });
      models.Post.hasMany(models.Like, { onDelete: "cascade" });
    }
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
